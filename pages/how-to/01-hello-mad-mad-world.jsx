[
  'import blem from "blem"\n' +
    '\n' +
    '// import CopyMe from "@/assets/copy-me.svg"\n' +
    'import Code from "@/components/Code"\n' +
    '\n' +
    '// This file was automatically generated from:\n' +
    '// mad-notes/notes/How-To Guides/01 - Hello mad, mad world.md\n' +
    '\n' +
    'export const NAME = "01-hello-mad-mad-world"\n' +
    'export const DATA = {\n' +
    '  tags: ["fundamentals", "literals", "logic", "guide"],\n' +
    '}\n' +
    'export const COMPONENT = () => {\n' +
    '  const bem = blem("HowToGuide")\n' +
    '  return (\n' +
    '    <article className={bem("")}>\n' +
    '      <h1 className={bem("header", "main")}>\n' +
    '        <div className={bem("title")}>Hello mad, mad world</div>\n' +
    '        <div className={bem("index", "ordinal")}>01</div>\n' +
    '      </h1>\n' +
    '      <h2 className={bem("header", "section")}>Installation</h2>\n' +
    '      <p>\n' +
    '        There are a few ways to{" "}\n' +
    '        <a className="internal" href="/Reference/Installation">\n' +
    '          install Madlib\n' +
    '        </a>\n' +
    '        , but the easiest is to install it via{" "}\n' +
    '        <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">\n' +
    '          npm\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <Code language="sh">{`npm i @madlib-lang/madlib -g\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        This should make the{" "}\n' +
    '        <code className={bem("code", "inline")}>{`madlib`}</code> binary\n' +
    '        globally accessible, so you should see a version number when you run{" "}\n' +
    '        <code className={bem("code", "inline")}>{`madlib --version`}</code>:\n' +
    '      </p>\n' +
    '      <Code language="sh">{`> madlib --version\n' +
    'madlib@0.23.13\n' +
    '`}</Code>\n' +
    '      <h2 className={bem("header", "section")}>REPL</h2>\n' +
    '      <p>\n' +
    '        For lightweight or exploratory work, you can work within the Madlib REPL\n' +
    '        (Read-Eval-Print-Loop). This is a sandbox where you can write code as\n' +
    '        you learn more about Madlib.\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        The REPL can be accessed with the command{" "}\n' +
    '        <code className={bem("code", "inline")}>{`madlib repl`}</code>, which\n' +
    '        should bring up an interactive session that looks like this:\n' +
    '      </p>\n' +
    '      <Code language="none">{`------ REPL - Madlib@0.23.13 -------------------------------\n' +
    'Available commands:\n' +
    '  :help           show help (alias :h)\n' +
    '  :exit           exit the REPL (alias :e)\n' +
    '  :multi          start multiline mode (alias :m)\n' +
    '  :type NAME      show the type of an assignment (alias :t)\n' +
    '  :reset          reset the state of the repl (alias :r)\n' +
    '-----------------------------------------------------------\n' +
    '\n' +
    '>\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        Here are some simple expressions you can start to play with in the REPL\n' +
    '        before we set up a more serious{" "}\n' +
    '        <a className="internal" href="/How-To Guides/05 - The March of IDEs">\n' +
    '          programming environment\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>Basic arithmetic</h3>\n' +
    '      <Code language="mad">{`> 5 + 5\n' +
    '10 :: Integer\n' +
    '> 10 - 100\n' +
    '-90 :: Integer\n' +
    '> 42 * 10\n' +
    '420 :: Integer\n' +
    '> 9 / 6\n' +
    '1.5 :: Float\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    "        As you can see, we're not doing anything complex here — but this\n" +
    '        illustrates the way we can write an expression and see the result, along\n' +
    '        with its type. The type is indicated by the double-colon /{" "}\n' +
    '        <code className={bem("code", "inline")}>{`::`}</code> , which can be\n' +
    '        read as "has type of".\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        These follow the usual precedence rules, and can be changed by adding\n' +
    '        parentheses:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> 3 * 4 / (5 - 6)\n' +
    '-12 :: Float\n' +
    '> 3 * 4 / 5 - 6\n' +
    '-3.6 :: Float\n' +
    '> 3 * (4 / 5) - 6\n' +
    '-3.5999999999999996 :: Float\n' +
    '`}</Code>\n' +
    '      <h2 className={bem("header", "section")}>Basic boolean logic</h2>\n' +
    '      <p>Here are some simple boolean expressions.</p>\n' +
    '      <Code language="mad">{`> true == false\n' +
    'false :: Boolean\n' +
    '> true == true\n' +
    'true :: Boolean\n' +
    '> false || true\n' +
    'true :: Boolean\n' +
    '> !(false == false)\n' +
    'true :: Boolean\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        As you can see, we have the literals{" "}\n' +
    '        <code className={bem("code", "inline")}>{`true`}</code> and{" "}\n' +
    '        <code className={bem("code", "inline")}>{`false`}</code>, as well as the\n' +
    '        logical <em>and</em> (\n' +
    '        <code className={bem("code", "inline")}>{`==`}</code>) and logical{" "}\n' +
    '        <em>or</em> (<code className={bem("code", "inline")}>{`||`}</code>)\n' +
    '        operators. Finally, we have a boolean negation operator (\n' +
    '        <code className={bem("code", "inline")}>{`!`}</code>) which is infixed.\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Asserting equality</h2>\n' +
    '      <p>Here we can assert the equality of things:</p>\n' +
    '      <Code language="mad">{`> 5 == 5\n' +
    'true :: Boolean\n' +
    '> 1 == 0\n' +
    'false :: Boolean\n' +
    '> 7 != 0\n' +
    'true :: Boolean\n' +
    '> "hello" == "world"\n' +
    'false :: Boolean\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    `        Here we've shown the equality operator ({" "}\n` +
    '        <code className={bem("code", "inline")}>{`==`}</code>) as well as the\n' +
    '        inequality operator (\n' +
    '        <code className={bem("code", "inline")}>{`!=`}</code>).\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Try mixing types</h2>\n' +
    '      <p>\n' +
    '        What happens if we try to do something like add{" "}\n' +
    '        <code className={bem("code", "inline")}>{`5 + "cool"`}</code>?\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> 5 + "cool"\n' +
    'Instance not found\n' +
    '\n' +
    "No instance for 'Number String' was found.\n" +
    '\n' +
    'Hint: Verify that you imported the module where the Number\n' +
    "instance for 'String' is defined\n" +
    'Note: Remember that instance methods are automatically imported when the module is imported, directly, or indirectly.\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    `        Here Madlib is saying that "cool" is not a number and so it doesn't know\n` +
    "        how to add 5 to it. We'll discuss this kind of error more later on.\n" +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>\n' +
    '        Import functions from Prelude\n' +
    '      </h2>\n' +
    '      <p>\n' +
    '        In Madlib, we call our standard library <em>Prelude</em> (a name taken\n' +
    "        from Haskell). We'll go over everything it has to offer in more detail\n" +
    `        shortly, but let's start by importing{" "}\n` +
    '        <code className={bem("code", "inline")}>{`Math`}</code>:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> import Math from "Math"\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        <a href="https://github.com/madlib-lang/madlib/blob/master/prelude/__internal__/Math.mad">\n' +
    '          Math\n' +
    '        </a>{" "}\n' +
    "        has a few functions we can play with. We won't go over everything here,\n" +
    '        just enough to give a general sense of how it works.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> import Math from "Math"\n' +
    '> Math.max(100, 20)\n' +
    '100 :: Integer\n' +
    '> Math.min(100, 20)\n' +
    '20 :: Integer\n' +
    '> x = Math.divide(3, 4)\n' +
    '0.75 :: Float\n' +
    '> y = Math.sqrt(100)\n' +
    '10 :: Float\n' +
    '> z = Math.abs(-1000)\n' +
    '1000 :: Integer\n' +
    '> x\n' +
    '0.75 :: Float\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        As you can see, functions are invoked by passing them parameters within\n' +
    "        parentheses. We've also assigned some of these results to variables (\n" +
    '        <code className={bem("code", "inline")}>{`x`}</code>,{" "}\n' +
    '        <code className={bem("code", "inline")}>{`y`}</code>,{" "}\n' +
    '        <code className={bem("code", "inline")}>{`z`}</code>) and we\'ve shown\n' +
    '        that the REPL will remember these values in memory.\n' +
    '      </p>\n' +
    '      <p>\n' +
    `        We'll also try playing with a few of the functions defined in{" "}\n` +
    '        <a href="https://github.com/madlib-lang/madlib/blob/master/prelude/__internal__/List.mad">\n' +
    '          List\n' +
    '        </a>\n' +
    "        . Again, this isn't comprehensive but will give a sense of how they\n" +
    '        work:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> import List from "List"\n' +
    '> List.range(0, 10)\n' +
    '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] :: List Integer\n' +
    '> nums = [1,2,3,4,500,7,92,30]\n' +
    '> List.reduce(Math.max, -1, nums)\n' +
    '500 :: Integer\n' +
    '> List.reduce((a, b) => a + b, 0, nums)\n' +
    '639 :: Integer\n' +
    '`}</Code>\n' +
    '      <h5 className={bem("header", "summary")}>Summary</h5>\n' +
    "      <p>In this document, we've discussed:</p>\n" +
    '      <ul>\n' +
    '        <li>\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world#installation"\n' +
    '          >\n' +
    '            Installing\n' +
    '          </a>{" "}\n' +
    '          Madlib\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          Using the{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world#repl"\n' +
    '          >\n' +
    '            REPL\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          Basic{" "}\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world#basic-arithmetic"\n' +
    '          >\n' +
    '            arithmetic\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world#basic-boolean-logic"\n' +
    '          >\n' +
    '            Boolean logic\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world#asserting-equality"\n' +
    '          >\n' +
    '            Expressions of equality\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a\n' +
    '            className="internal"\n' +
    '            href="/How-To Guides/01 - Hello mad, mad world"\n' +
    '          >\n' +
    '            Importing\n' +
    '          </a>{" "}\n' +
    '          and invoking functions from Prelude\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </article>\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'export default COMPONENT\n'
]
