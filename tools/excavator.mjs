#!/usr/bin/env node

import { nodeTypes } from "@mdx-js/mdx"
import { unified } from "unified"
import { remark } from "remark"
import slug from "slug"
import * as prettier from "prettier"
//import remarkObsidian from "@thecae/remark-obsidian"
import remarkObsidian from "remark-parse-obsidian"
import remarkParse from "remark-parse"
import rehypeRaw from "rehype-raw"
// import remarkUTF8 from "remark-utf8";
import rehypeHighlight from "rehype-highlight"
//import remarkLinks from "remark-wiki-link-plus"
import remarkLinks from "@portaljs/remark-wiki-link"
import rehypeFormat from "rehype-format"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkStringify from "remark-stringify"
import rehypeStringify from "rehype-stringify"
import remarkRehype from "remark-rehype"
import remarkFrontmatter from "remark-frontmatter"
//import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkReact from "remark-react"
import fs from "node:fs"
import { node, encaseP, chain, map, fork } from "fluture"
import { replace, path, head, slice, pipe, curry } from "ramda"
import * as PROD from "react/jsx-runtime"
import rehypeReact from "rehype-react"

const utf8 = (x) => fs.promises.readFile(x, "utf8")

const readFile = encaseP(utf8)

const trace = curry((msg, x) => {
  console.log(msg, x)
  return x
})

const pickaxe = (x) =>
  unified()
    .use(remarkParse, { gfm: true })
    .use(remarkBreaks)
    .use(remarkObsidian)
    // .use(remarkUTF8)
    .use(remarkGfm)
    .use(remarkLinks)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    //.use(remarkStringify)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw, { passThrough: nodeTypes })
    // .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true })
    // .use(rehypeReact, PROD)
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
  replace(/=>/g, "=&gt;"),
  replace(/>/g, "&gt;"),
  // fixNewlines,
)
const fixClassNames = replace(/class=/g, "className=")
const fixEntities = replace(/&#x26;gt;/g, "&gt;")
//const untransformNewlines = replace(/\n/g, "\n\n")

const postfix = pipe(
  fixClassNames,
  fixEntities,
  // replace(/\<pre\>\<code\>/g, "<pre><code>{`"),
  // replace(/\<\/pre>\<\/code\>/g, "`}</pre></code>"),
)

const readObsidian = (raw) =>
  pipe(
    readFile,
    map(spotFix),
    chain(encaseP(pickaxe)),
    map(jsxify(raw)),
    map(postfix),
    chain(prettify),
  )(raw)

const j2 = (x) => JSON.stringify(x, null, 2)
const stringifyFrontmatter = pipe(path(["data", "frontmatter"]), j2)

pipe(
  slice(2, Infinity),
  head,
  readObsidian,
  fork(console.warn)(console.log),
)(process.argv)
