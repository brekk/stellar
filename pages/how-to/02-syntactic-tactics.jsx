[
  'import blem from "blem"\n' +
    '\n' +
    '// import CopyMe from "@/assets/copy-me.svg"\n' +
    'import Code from "@/components/Code"\n' +
    '\n' +
    '// This file was automatically generated from:\n' +
    '// mad-notes/notes/How-To Guides/02 - Syntactic Tactics.md\n' +
    '\n' +
    'export const NAME = "02-syntactic-tactics"\n' +
    'export const DATA = {\n' +
    '  tags: ["guide"],\n' +
    '}\n' +
    'export const COMPONENT = () => {\n' +
    '  const bem = blem("HowToGuide")\n' +
    '  return (\n' +
    '    <article className={bem("")}>\n' +
    '      <h1 className={bem("header", "main")}>\n' +
    '        <div className={bem("title")}>Syntactic Tactics</div>\n' +
    '        <div className={bem("index", "ordinal")}>02</div>\n' +
    '      </h1>\n' +
    '      <p>\n' +
    '        In the last guide we went over the core of writing functions in Madlib.\n' +
    '        In this guide we’ll be going over common syntactic affordances.\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Comments</h2>\n' +
    '      <p>\n' +
    '        Madlib has C-style comments which start with two slashes: (\n' +
    '        <code className={bem("code", "inline")}>{`//`}</code>) for single-lines\n' +
    '        or wrapped with (<code className={bem("code", "inline")}>{`/*`}</code> …{" "}\n' +
    '        <code className={bem("code", "inline")}>{`*/`}</code> ) for multi-line\n' +
    '        comments.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`// this is a comment\n' +
    '/*\n' +
    'This is a\n' +
    'Multiline\n' +
    'Comment\n' +
    '*/\n' +
    '`}</Code>\n' +
    '      <h3 className={bem("header", "subsection")}>Documentation comments</h3>\n' +
    '      <p>\n' +
    '        Additionally there is a special format for creating comments which can\n' +
    '        be automatically parsed and turned into structured JSON — and a{" "}\n' +
    '        <a href="https://github.com/madlib-lang/maddoc">secondary tool</a> which\n' +
    '        can then turn this JSON into a website.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`/**\n' +
    ' * A function for division\n' +
    ' * @since 0.0.1\n' +
    ' * @example\n' +
    ' * third = div($, 3)\n' +
    ' */\n' +
    'div :: Integer -> Integer -> Float\n' +
    'div = (n, d) => n / d\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        This is discussed more in{" "}\n' +
    '        <a className="internal" href="/How-To Guides/06 - Developmental Growth">\n' +
    '          a future guide\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Conditionals</h2>\n' +
    '      <p>\n' +
    '        Conditions are syntactically expressed in one of two ways in Madlib.\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>Ternary Expressions</h3>\n' +
    '      <p>Ternary conditions can be written in the following way:</p>\n' +
    '      <Code language="mad">{`x = 5\n' +
    '// condition ? truthy case : falsy case\n' +
    'y = x >= 0 ? “less than zero” : “greater than zero”\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        Note the way in which this is a logical expression. If we wanted to nest\n' +
    '        more cases, we could do so:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`y = x == 0 ? “is zero” : x &#x3C; 0 ? “less than zero” : “greater than zero”\n' +
    '`}</Code>\n' +
    '      <h3 className={bem("header", "subsection")}>if … else</h3>\n' +
    '      <p>\n' +
    '        The other way of expressing conditions syntactically in Madlib is using\n' +
    '        the <code className={bem("code", "inline")}>{`if`}</code> and{" "}\n' +
    '        <code className={bem("code", "inline")}>{`else`}</code> keywords.\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        Unlike some other languages, this syntax is designed to be identical to\n' +
    '        ternary expressions: each branch has a single expression by default, has\n' +
    '        implicit returns and must be consistent in return type. Additionally,\n' +
    '        like ternary expressions, there is no means of short-circuiting.\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        Here’s the same example from above using{" "}\n' +
    '        <code className={bem("code", "inline")}>{`if`}</code> /{" "}\n' +
    '        <code className={bem("code", "inline")}>{`else`}</code> syntax:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`x = 5\n' +
    'y = if (x >= 0) {\n' +
    '  “less than zero”\n' +
    '} else {\n' +
    '  “greater than zero”\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        Note the way in which this is also an expression and it is being\n' +
    '        assigned to <code className={bem("code", "inline")}>{`y`}</code>.\n' +
    '      </p>\n' +
    '      <p>As constructed, we cannot add an additional expression to this.</p>\n' +
    '      <p>\n' +
    '        If we wanted to add an additional expression, we’d need to add a{" "}\n' +
    '        <a className="internal" href="/Reference/Do Notation">\n' +
    '          do\n' +
    '        </a>{" "}\n' +
    '        keyword:\n' +
    '      </p>\n' +
    '      <h4 className={bem("header", "example")}>\n' +
    '        Using <code className={bem("code", "inline")}>{`do`}</code> notation\n' +
    '        with conditionals\n' +
    '      </h4>\n' +
    '      <Code language="mad">{`import IO from “IO”\n' +
    'x = 5\n' +
    'y = if (x >= 0) do {\n' +
    '  IO.putLine(“happy path”)\n' +
    '  return “less than zero”\n' +
    '} else {\n' +
    '  “greater than zero”\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        Note the way in which we’ve added both a{" "}\n' +
    '        <code className={bem("code", "inline")}>{`do`}</code> and an explicit{" "}\n' +
    '        <code className={bem("code", "inline")}>{`return`}</code> here. If the\n' +
    '        return is omitted, the compiler will infer that the return type of this\n' +
    '        expression is Unit /{" "}\n' +
    '        <code className={bem("code", "inline")}>{`{}`}</code>. Without the{" "}\n' +
    '        <code className={bem("code", "inline")}>{`do`}</code>, this is\n' +
    '        syntactically invalid because it’s not a single expression.\n' +
    '      </p>\n' +
    '      <h4 className={bem("header", "example")}>\n' +
    '        Implicit <code className={bem("code", "inline")}>{`else`}</code>\n' +
    '      </h4>\n' +
    '      <p>\n' +
    '        Given the behavior described above, the compiler will automatically add\n' +
    '        an <code className={bem("code", "inline")}>{`else`}</code> clause when\n' +
    '        it is omitted. However, this else clause necessarily returns{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Unit">\n' +
    '          Unit\n' +
    '        </a>{" "}\n' +
    '        in order to be type consistent. Therefore it can be helpful to use{" "}\n' +
    '        <code className={bem("code", "inline")}>{`do`}</code> notation to eschew\n' +
    '        an explicit return value when using{" "}\n' +
    '        <code className={bem("code", "inline")}>{`if`}</code> clauses by\n' +
    '        themselves.\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Modules</h2>\n' +
    '      <p>\n' +
    '        Madlib allows segmentation of programs into separate files, called\n' +
    '        Modules. These are defined by usage of{" "}\n' +
    '        <code className={bem("code", "inline")}>{`import`}</code>s and{" "}\n' +
    '        <code className={bem("code", "inline")}>{`export`}</code>s.\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>Imports</h3>\n' +
    '      <p>\n' +
    '        As we saw in the{" "}\n' +
    '        <a className="internal" href="/How-To Guides/01 - Hello mad, mad world">\n' +
    '          previous guide\n' +
    '        </a>\n' +
    '        , files can make use of{" "}\n' +
    '        <code className={bem("code", "inline")}>{`import`}</code> syntax to pull\n' +
    '        in content from{" "}\n' +
    '        <a className="internal new" href="Prelude">\n' +
    '          Prelude\n' +
    '        </a>\n' +
    '        . They can also use the same syntax to pull in content from local\n' +
    '        modules or 3rd-party modules.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`import MyLocalModule from "./MyLocalModule"\n' +
    '// or, direct access\n' +
    'import { method, variable } from "./MyLocalModule"\n' +
    '`}</Code>\n' +
    '      <h3 className={bem("header", "subsection")}>Exports</h3>\n' +
    '      <p>The example above would correspond to a local module like this:</p>\n' +
    '      <Code language="mad">{`localvar = “this value is inaccessible outside of this file”\n' +
    'export variable = “this value is accessible elsewhere”\n' +
    '\n' +
    'method :: a -> a\n' +
    'method = (x) => x\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    `        We'll discuss more about{" "}\n` +
    '        <a className="internal" href="/How-To Guides/03 - Just My Type">\n' +
    '          defining functions\n' +
    '        </a>{" "}\n' +
    '        in the next guide.\n' +
    '      </p>\n' +
    '      <h5 className={bem("header", "summary")}>Summary</h5>\n' +
    "      <p>In this document, we've discussed:</p>\n" +
    '      <ul>\n' +
    '        <li>\n' +
    '          Annotating a Madlib program with{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/02 - Syntactic Tactics#comments"\n' +
    '          >\n' +
    '            comments\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          Defining branching logic with{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/02 - Syntactic Tactics#conditionals"\n' +
    '          >\n' +
    '            conditionals\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          Segmenting programs via modules, using{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/02 - Syntactic Tactics#imports"\n' +
    '          >\n' +
    '            imports\n' +
    '          </a>{" "}\n' +
    '          and{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/02 - Syntactic Tactics#exports"\n' +
    '          >\n' +
    '            exports\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          Defining and running a{" "}\n' +
    '          <code className={bem("code", "inline")}>{`main`}</code> function\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </article>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'export default COMPONENT\n'
]
