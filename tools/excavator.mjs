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
/*
const pickaxe = (x) =>
  unified()
    .use(remarkParse, { gfm: true })
    //.use(remarkGfm)
    .use(remarkBreaks)

    .use(remarkLinks, {
      pathFormat: "obsidian-short",
      permalinks,
    })
    .use(remarkObsidian)
    // .use(remarkUTF8)
    //.use(remarkFrontmatter, ["yaml"])
    //.use(remarkParseFrontmatter)
    .use(remarkStringify)
    //.use(remarkRehype, { allowDangerousHtml: true })
    //.use(rehypeRaw, { passThrough: nodeTypes })
    // .use(rehypeHighlight)
    //.use(rehypeFormat)
    //.use(rehypeStringify, { allowDangerousHtml: true })
    // .use(rehypeReact, PROD)
    .process(x)
*/
const pickaxe = (x) =>
  unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkObsidian)
    .use(remarkLinks, { permalinks, pathFormat: "obsidian-short" })

    // .use(remarkUTF8)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)

    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw, { passThrough: nodeTypes })
    // .use(rehypeParse, { fragment: true })

    // https://github.com/SassDoc/prism-scss-sassdoc/blob/master/prism-scss-sassdoc.js
    // .use(rehypePrism)
    // .use(remarkEmbed)
    // .use(remarkGfm)
    // .use(remarkSmart, { quotes: false, dashes: "oldschool" })
    // .use(remarkCallouts)
    // .use(remarkTOC, { heading: "Table of Contents", tight: true })
    // .use(remarkStringify)
    // .use(rehypeReact, production)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(x)

const cleanName = pipe((x) => x.slice(x.lastIndexOf("/"), -3), slug)

const format = (x) => prettier.format(x, { semi: false, parser: "typescript" })
const prettify = encaseP(format)
// const spotFix = replace(/\>\>/g, ">&gt;");

const jsxify = curry((name, raw) => {
  return `import blem from "blem"

// This file was automatically generated from:
// ${name}

export const NAME = "${cleanName(name)}"
export const DATA = ${stringifyFrontmatter(raw)}
export const COMPONENT = () => {
  const bem = blem(NAME)
  return (<article className={bem("")}>${raw.value}</article>)
}

export default COMPONENT
`
})

//const fixNewlines = replace(/\n/g, "")
const spotFix = pipe(
  // replace(/^>/g, "&gt;"),
  // replace(/=>/g, "=&gt;"),
  // replace(/>/g, "__AMP__"),
  I,
  // fixNewlines,
)
const fixClassNames = replace(/class=/g, "className=")
//const untransformNewlines = replace(/\n/g, "\n\n")

const postfix = pipe(
  // trace("HUH"),
  // replace(/__AMP__/g, "&gt;"),
  fixClassNames,
  // replace(/^&gt;/g, "&gt;"),
  // replace(/^&#x26;&gt;/g, "&gt;"),

  // fixEntities,
  // fixSoloChevron,
  // trace("YOOO"),
  replace(/<pre><code>/g, "<pre><code>{`"),
  replace(/<\/code><\/pre>/g, "`}</code></pre>"),
  replace(/<pre><code className="(.*)">/g, '<pre><code className="$1">{`'),
)

const readObsidian = (raw) =>
  pipe(
    readFile,
    map(spotFix),
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
