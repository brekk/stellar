#!/usr/bin/env node
import util from "node:util"
import path from "node:path"

import { nodeTypes } from "@mdx-js/mdx"
import { unified } from "unified"
import { remark } from "remark"
import slug from "slug"
import { excavatorWithCancel } from "./excavator-runner.mjs"

import * as prettier from "prettier"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkBreaks from "remark-breaks"
import remarkFrontmatter from "remark-frontmatter"
import remarkLinks from "@portaljs/remark-wiki-link"
import remarkObsidian from "remark-parse-obsidian"
import remarkParse from "remark-parse"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import fs from "node:fs"
import { encaseP, parallel, chain, fork } from "fluture"
import {
  map,
  ifElse,
  includes,
  split,
  replace,
  path as Rpath,
  head,
  slice,
  pipe,
  curry,
} from "ramda"
import { readDirWithConfigAndCancel } from "destined"

// import * as PROD from "react/jsx-runtime"
// import rehypeReact from "rehype-react"

import { getPermalinks } from "@portaljs/remark-wiki-link"

import { inspectWhere, traceWhere } from "./rehype-plugin.mjs"

const HERE = path.resolve(process.cwd(), "mad-notes/notes")
// console.log("HERE", HERE)
const permalinks = await getPermalinks(HERE)
// console.log("PERMA LINKIES", _permalinks)
// const permalinks = _permalinks.map((z) => z.slice(z.lastIndexOf("/") + 1))
// console.log("PERMA STINKIES", permalinks)

const utf8 = (x) => fs.promises.readFile(x, "utf8")

const readFile = encaseP(utf8)

const xtraceWhen = curry((check, effect, msg, x) => {
  if (check(msg, x)) {
    effect(msg, x)
  }
  return x
})
const xtrace = xtraceWhen(() => true)

const trace = xtrace(console.log)

const pickaxe = (x) =>
  unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkObsidian)
    .use(remarkLinks, { permalinks, pathFormat: "obsidian-short" })
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(inspectWhere("element", "YOOO"))
    .use(rehypeRaw, { passThrough: nodeTypes })
    /* these don't seem to work:
    .use(rehypeSlug)
    .use(rehypeHeading)
  */
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(x)

const cleanName = pipe((x) => x.slice(x.lastIndexOf("/"), -3), slug)

const format = (x) => prettier.format(x, { semi: false, parser: "typescript" })
const prettify = encaseP(format)
// const spotFix = replace(/\>\>/g, ">&gt;");

const renderTitle = (title) => `<div className={bem("title")}>${title}</div>`

const renderOrdinal = (index) =>
  `<div className={bem("index", "ordinal")}>${index}</div>`

const renderName = pipe(
  (x) => x.slice(x.lastIndexOf("/") + 1, x.lastIndexOf(".")),
  ifElse(
    includes(" - "),
    pipe(
      split(" - "),
      ([_1, _2]) =>
        `${renderTitle(_2)}
${renderOrdinal(_1)}
`,
    ),
    renderTitle,
  ),
  (x) => `<h1 className={bem("header", "main")}>${x}</h1>`,
)

const jsxify = curry((name, raw) => {
  return `import blem from "blem"

// import CopyMe from "@/assets/copy-me.svg"
import Code from "@/components/Code"

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
const fixCode = pipe(
  replace(/<pre><code>/g, '<Code language="none">{`'),
  replace(/<\/code><\/pre>/g, "`}</Code>"),
  replace(/<pre><code className="language-(.*)">/g, '<Code language="$1">{`'),

  replace(
    /<code>(.*?)<\/code>/g,
    `<code className={bem("code", "inline")}>{\`$1\`}</code>`,
  ),
)

const fixHeaders = pipe(
  replace(/<h2>/g, '<h2 className={bem("header", "section")}>'),
  replace(/<h3>/g, '<h3 className={bem("header", "subsection")}>'),
  replace(/<h4>/g, '<h4 className={bem("header", "example")}>'),
  replace(/<h5>/g, '<h5 className={bem("header", "summary")}>'),
)

const postfix = pipe(
  fixClassNames,
  replace(/&#x26;/g, "="),
  fixCode,
  fixHeaders,
)
const slugpath = pipe((x) => path.basename(x, ".md"), slug)

const readObsidian = (raw) => {
  console.log("path.basename", slugpath(raw))
  //console.log("READ!", slug(raw.slice(raw.lastIndexOf("/"), raw.last)))
  return pipe(
    readFile,
    chain(encaseP(pickaxe)),
    map(jsxify(raw)),
    map(postfix),
    chain(prettify),
    //chain(writeFile(slug(raw)))
  )(raw)
}

const j2 = (x) => JSON.stringify(x, null, 2)
const stringifyFrontmatter = pipe(Rpath(["data", "frontmatter"]), j2)

pipe(
  excavatorWithCancel(() => {}),
  fork(console.warn)(console.log),
)(process.argv)

pipe(
  slice(2, Infinity),
  head,
  readDirWithConfigAndCancel(() => {}, { ignore: ["node_modules/**"] }),
  chain(pipe(map(readObsidian), parallel(10))),
  fork(console.warn)(console.log),
)(process.argv)
