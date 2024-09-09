#!/usr/bin/env node

import { unified } from "unified";
import slug from "slug";
import * as prettier from "prettier";
import remarkObsidian from "remark-obsidian";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeFormat from "rehype-format";
//import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkFrontmatter from "remark-frontmatter";
//import remarkMDXFrontmatter from "remark-mdx-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkReact from "remark-react";
import fs from "node:fs";
import { node, encaseP, chain, map, fork } from "fluture";
import { replace, path, head, slice, pipe, curry } from "ramda";
import * as PROD from "react/jsx-runtime";
import rehypeReact from "rehype-react";

const utf8 = (x) => fs.promises.readFile(x, "utf8");

const readFile = encaseP(utf8);

const trace = curry((msg, x) => {
  console.log(msg, x);
  return x;
});

const pickaxe = (x) =>
  unified()
    .use(remarkParse)
    .use(remarkObsidian)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify)
    // .use(rehypeReact, PROD)
    .process(x);

const cleanName = pipe((x) => x.slice(x.lastIndexOf("/"), -3), slug);

const format = (x) => prettier.format(x, { semi: false, parser: "typescript" });
const prettify = encaseP(format);
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
`;
});

const fixNewlines = replace(/\n/g, "");
const spotFix = pipe(
  replace(/=>/g, "=&gt;"),
  replace(/>/g, "&gt;"),
  // fixNewlines,
);
const fixClassNames = replace(/class=/g, "className=");
const fixEntities = replace(/&#x26;gt;/g, "&gt;");
const untransformNewlines = replace(/\n/g, "\n\n");

const postfix = pipe(fixClassNames, fixEntities, untransformNewlines);

const readObsidian = (raw) =>
  pipe(
    readFile,
    map(spotFix),
    chain(encaseP(pickaxe)),
    map(jsxify(raw)),
    map(postfix),
    // chain(prettify),
  )(raw);

const j2 = (x) => JSON.stringify(x, null, 2);
const stringifyFrontmatter = pipe(path(["data", "frontmatter"]), j2);

pipe(
  slice(2, Infinity),
  head,
  readObsidian,
  fork(console.warn)(console.log),
)(process.argv);
