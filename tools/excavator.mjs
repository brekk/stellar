#!/usr/bin/env node

import { nodeTypes } from "@mdx-js/mdx"
import { unified } from "unified"
import { remark } from "remark"
import path from "node:path"
import slug from "slug"
import * as prettier from "prettier"
//import remarkObsidian from "@thecae/remark-obsidian"
import remarkUTF8 from "remark-utf8"
//import remarkLinks from "remark-wiki-link-plus"
import rehypeFormat from "rehype-format"
import rehypeHeading from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypePrism from "rehype-prism-plus"
// import rehypeParse from "rehyp
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkBreaks from "remark-breaks"
import remarkCallouts from "@portaljs/remark-callouts"
import remarkEmbed from "@portaljs/remark-embed"
import remarkGfm from "remark-gfm"
import remarkLinks from "@portaljs/remark-wiki-link"
import remarkObsidian from "remark-parse-obsidian"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkSmart from "remark-smartypants"
import remarkStringify from "remark-stringify"
import remarkTOC from "remark-toc"
import * as prod from "react/jsx-runtime"
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

import remarkFrontmatter from "remark-frontmatter"
//import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkReact from "remark-react"
import fs from "node:fs"
import { node, encaseP, chain, map, fork } from "fluture"
import {
  replace,
  path as Rpath,
  head,
  slice,
  pipe,
  curry,
  identity as I,
} from "ramda"
import * as PROD from "react/jsx-runtime"
import rehypeReact from "rehype-react"

import { getPermalinks } from "@portaljs/remark-wiki-link"
const HERE = path.resolve(process.cwd(), "mad-notes/notes")
// console.log("HERE", HERE)
const permalinks = await getPermalinks(HERE)
// console.log("PERMA LINKIES", _permalinks)
// const permalinks = _permalinks.map((z) => z.slice(z.lastIndexOf("/") + 1))
// console.log("PERMA STINKIES", permalinks)

const utf8 = (x) => fs.promises.readFile(x, "utf8")

const readFile = encaseP(utf8)

const trace = curry((msg, x) => {
  console.log(msg, x)
  return x
})

const pickaxe = (x) =>
  unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkObsidian)
    .use(remarkLinks, { permalinks, pathFormat: "obsidian-short" })
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw, { passThrough: nodeTypes })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(x)

const cleanName = pipe((x) => x.slice(x.lastIndexOf("/"), -3), slug)

const format = (x) => prettier.format(x, { semi: false, parser: "typescript" })
const prettify = encaseP(format)
// const spotFix = replace(/\>\>/g, ">&gt;");

const renderName = pipe(
  (x) => x.slice(x.lastIndexOf("/") + 1, x.lastIndexOf(".")),
  (x) => `<h1>${x}</h1>`,
)

const jsxify = curry((name, raw) => {
  return `import blem from "blem"

// This file was automatically generated from:
// ${name}

export const NAME = "${cleanName(name)}"
export const DATA = ${stringifyFrontmatter(raw)}
export const COMPONENT = () => {
  const bem = blem("HowToGuide")
  return (<article className={bem("")}>${renderName(name)}${raw.value}</article>)
}

export default COMPONENT
`
})

const fixClassNames = replace(/class=/g, "className=")

const postfix = pipe(
  fixClassNames,
  replace(/&#x26;/g, "="),
  replace(/<pre><code>/g, '<pre className={bem("language", "none")}><code>{`'),
  replace(/<\/code><\/pre>/g, "`}</code></pre>"),
  replace(
    /<pre><code className="language-(.*)">/g,
    '<pre className={bem("language", "$1")} data-lang="$1"><code className="language-$1">{`',
  ),
)

const readObsidian = (raw) =>
  pipe(
    readFile,
    chain(encaseP(pickaxe)),
    // map(trace("YO")),
    map(jsxify(raw)),
    map(postfix),
    chain(prettify),
  )(raw)

const j2 = (x) => JSON.stringify(x, null, 2)
const stringifyFrontmatter = pipe(Rpath(["data", "frontmatter"]), j2)

pipe(
  slice(2, Infinity),
  head,
  readObsidian,
  fork(console.warn)(console.log),
)(process.argv)
