#!/usr/bin/env node

import { nodeTypes } from "@mdx-js/mdx"
import util from "node:util"
import { unified } from "unified"
import { remark } from "remark"
import path from "node:path"
import slug from "slug"
import * as prettier from "prettier"
//import remarkObsidian from "@thecae/remark-obsidian"
// import remarkUTF8 from "remark-utf8"
//import remarkLinks from "remark-wiki-link-plus"
// import rehypeFormat from "rehype-format"
// import rehypeHeading from "rehype-autolink-headings"
// import rehypeHighlight from "rehype-highlight"
// import rehypePrism from "rehype-prism-plus"
// import rehypeParse from "rehyp
import rehypeRaw from "rehype-raw"
// import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkBreaks from "remark-breaks"
// import remarkCallouts from "@portaljs/remark-callouts"
// import remarkEmbed from "@portaljs/remark-embed"
// import remarkGfm from "remark-gfm"
import remarkLinks from "@portaljs/remark-wiki-link"
import remarkObsidian from "remark-parse-obsidian"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
// import remarkSmart from "remark-smartypants"
// import remarkStringify from "remark-stringify"
// import remarkTOC from "remark-toc"
// import * as prod from "react/jsx-runtime"
// const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

import remarkFrontmatter from "remark-frontmatter"
//import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter"
// import remarkReact from "remark-react"
import fs from "node:fs"
import { node, encaseP, chain, map, fork } from "fluture"
import {
  ifElse,
  filter,
  includes,
  split,
  replace,
  path as Rpath,
  head,
  slice,
  pipe,
  curry,
  identity as I,
} from "ramda"
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

/*
https://swizec.com/blog/how-to-debug-unified-rehype-or-remark-and-fix-bugs-in-markdown-processing/
function debugCodeBlocks() {
  function findCodeBlocks(node) {
    let nodes = []

    if (node.tagName === "pre") {
      nodes.push(node) // <pre> nodes are code blocks
    } else if (node.children) {
      // recursively walk through child nodes
      for (let child of node.children) {
        nodes.push(...findCodeBlocks(child))
      }
    }

    return nodes
  }

  return (tree) => {
    const codeBlocks = findCodeBlocks(tree)

    // deep print the codeBlocks array
    console.log(require("util").inspect(tree, false, null, true))

    return tree
  }
}*/

const xtraceWhen = curry((check, effect, msg, x) => {
  if (check(msg, x)) {
    effect(msg, x)
  }
  return x
})
const xtrace = xtraceWhen(() => true)

const trace = xtrace(console.log)

/*
const walkChildren = curry((check, agg, node) =>
  filter(I, [
    // keep the aggregate
    ...agg,
    // add this node maybe
    check(node) ? node : false,
    // call walkChildren on the children
    ...map(walkChildren(check, agg))(node?.children ?? []),
  ]),
)
*/

import { visit } from "unist-util-visit"

const blockWalker = curry((tag, select, ast) => {
  visit(ast, select, (node) => {
    console.log(tag)
    console.log(util.inspect(node, false, null, true))
  })
  // if you want to eschew everything
  // return ast
})

/*
function fixCodeBlocks() {
  const settings = {
    quoteSmart: false,
    closeSelfClosing: false,
    omitOptionalTags: false,
    entities: { useShortestReferences: true },
  }

  return (tree) => {
    // same recursion findCodeBlocks as above
    const codeBlocks = findCodeBlocks(tree)

    for (let block of codeBlocks) {
      // copy position info for the whole <pre> so we can fake it later
      const position = {
        start: block.children[0].position.start,
        end: block.children[block.children.length - 1].position.end,
      }

      // replace children with my fakes
      block.children = []
    }

    return tree
  }
}
*/

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
  replace(/<pre><code>/g, '<pre className={bem("language", "none")}><code>{`'),
  replace(/<\/code><\/pre>/g, "`}</code></pre>"),
  replace(
    /<pre><code className="language-(.*)">/g,
    '<pre className={bem("language", "$1")} data-lang="$1">{/*<div className={bem("button", "copy")}><CopyMe /></div>*/}<code className={bem("language-content", "$1")}><div className={bem("language-meta")}>{`$1`}</div>{`',
  ),

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
