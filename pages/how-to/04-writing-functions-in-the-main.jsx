[
  'import blem from "blem"\n' +
    '\n' +
    '// import CopyMe from "@/assets/copy-me.svg"\n' +
    'import Code from "@/components/Code"\n' +
    '\n' +
    '// This file was automatically generated from:\n' +
    '// mad-notes/notes/How-To Guides/04 - Writing functions, in the main.md\n' +
    '\n' +
    'export const NAME = "04-writing-functions-in-the-main"\n' +
    'export const DATA = {\n' +
    '  tags: ["functions", "curry", "composition", "guide"],\n' +
    '}\n' +
    'export const COMPONENT = () => {\n' +
    '  const bem = blem("HowToGuide")\n' +
    '  return (\n' +
    '    <article className={bem("")}>\n' +
    '      <h1 className={bem("header", "main")}>\n' +
    '        <div className={bem("title")}>Writing functions, in the main</div>\n' +
    '        <div className={bem("index", "ordinal")}>04</div>\n' +
    '      </h1>\n' +
    '      <p>\n' +
    '        In the{" "}\n' +
    '        <a className="internal" href="/How-To Guides/01 - Hello mad, mad world">\n' +
    '          previous guide\n' +
    '        </a>{" "}\n' +
    '        we talked through the basics of{" "}\n' +
    '        <a\n' +
    '          className="internal"\n' +
    '          href="/How-To Guides/01 - Hello mad, mad world#installation"\n' +
    '        >\n' +
    '          installing\n' +
    '        </a>{" "}\n' +
    '        Madlib and running the{" "}\n' +
    '        <a\n' +
    '          className="internal"\n' +
    '          href="/How-To Guides/01 - Hello mad, mad world#repl"\n' +
    '        >\n' +
    '          REPL\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <p>\n' +
    `        In this document we'll talk through writing our own{" "}\n` +
    '        <code className={bem("code", "inline")}>{`main`}</code> function, which\n' +
    '        will allow us to save and execute code outside of the REPL.\n' +
    '      </p>\n' +
    '      <h2 className={bem("header", "section")}>Defining functions</h2>\n' +
    '      <p>\n' +
    `        Let's step through the process of defining functions in a standalone{" "}\n` +
    '        <code className={bem("code", "inline")}>{`main`}</code> file. Open up\n' +
    '        your favorite text editor and write the following\n' +
    '      </p>\n' +
    '      <Code language="mad">{`import IO from "IO"\n' +
    '\n' +
    'say :: String -> String -> String\n' +
    'say = (word, subject) => word ++ " " ++ subject\n' +
    '\n' +
    'main = () => {\n' +
    '  pipe(\n' +
    '    say("hello"),\n' +
    '    IO.putLine\n' +
    '  )("world")\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        Save this file as{" "}\n' +
    '        <code className={bem("code", "inline")}>{`Say.main.mad`}</code> or\n' +
    '        whatever you like, as long as it ends in{" "}\n' +
    '        <code className={bem("code", "inline")}>{`.mad`}</code>.\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        We can run this file standalone with the command{" "}\n' +
    '        <code className={bem("code", "inline")}>{`madlib run`}</code>:\n' +
    '      </p>\n' +
    '      <Code language="sh">{`> madlib run Say.main.mad\n' +
    'hello world\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    "        Let's talk through exactly what we've done here, as there's a few\n" +
    '        pieces.\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>Type signatures</h3>\n' +
    '      <p>\n' +
    `        Firstly, we've defined a function named{" "}\n` +
    '        <code className={bem("code", "inline")}>{`say`}</code>. It has a{" "}\n' +
    '        <a className="internal" href="/Reference/Type System/Type Signatures">\n' +
    '          type signature\n' +
    '        </a>\n' +
    '        ,{" "}\n' +
    '        <code\n' +
    '          className={bem("code", "inline")}\n' +
    '        >{`say :: String -> String -> String`}</code>{" "}\n' +
    '        — this means that it is a binary function, taking two parameters (of\n' +
    '        type <code className={bem("code", "inline")}>{`String`}</code>), and its\n' +
    '        return type is also a{" "}\n' +
    '        <code className={bem("code", "inline")}>{`String`}</code>. Learning to\n' +
    "        read these type signatures can take some time, but we'll continue to\n" +
    '        articulate what they mean as we go through this process.\n' +
    '      </p>\n' +
    '      <p>\n' +
    "        Let's see a few examples of more signatures (we're omitting the function\n" +
    "        implementations here, but they'd normally be required in order to be\n" +
    '        syntactically valid):\n' +
    '      </p>\n' +
    '      <Code language="mad">{`func :: Integer -> String\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        The function above takes an{" "}\n' +
    '        <a\n' +
    '          className="internal"\n' +
    '          href="/Reference/Literals/Numeric Types#integer"\n' +
    '        >\n' +
    '          Integer\n' +
    '        </a>{" "}\n' +
    '        and returns a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/String">\n' +
    '          String\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <Code language="mad">{`otherFunc :: Float -> Float -> Float -> List Float\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        This <code className={bem("code", "inline")}>{`otherFunc`}</code> takes\n' +
    '        three{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Numeric Types#float">\n' +
    '          floating point numbers\n' +
    '        </a>{" "}\n' +
    '        and returns a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/List">\n' +
    '          List\n' +
    '        </a>{" "}\n' +
    '        of floating point numbers.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`thirdFunction :: Char -> String -> Boolean\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        This <code className={bem("code", "inline")}>{`thirdFunction`}</code>{" "}\n' +
    '        takes a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Char">\n' +
    '          Char\n' +
    '        </a>{" "}\n' +
    '        and a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/String">\n' +
    '          String\n' +
    '        </a>{" "}\n' +
    '        and returns a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Boolean">\n' +
    '          Boolean\n' +
    '        </a>\n' +
    '        .\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>Function implementation</h3>\n' +
    '      <p>\n' +
    '        Coming back to the{" "}\n' +
    '        <code className={bem("code", "inline")}>{`say`}</code> function we\n' +
    "        defined earlier, let's talk through its actual implementation details:\n" +
    '      </p>\n' +
    '      <Code language="mad">{`say :: String -> String -> String\n' +
    'say = (word, subject) => word ++ " " ++ subject\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        This definition allows us to associate a concrete implementation with\n' +
    '        the types in the signature. So{" "}\n' +
    '        <code className={bem("code", "inline")}>{`word`}</code> here is a{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/String">\n' +
    '          String\n' +
    '        </a>\n' +
    '        , as is <code className={bem("code", "inline")}>{`subject`}</code>. The\n' +
    '        return type is also a String, which works out nicely because the\n' +
    '        concatenation operator{" "}\n' +
    '        <code className={bem("code", "inline")}>{`++`}</code> works on Strings\n' +
    '        and Lists, so{" "}\n' +
    '        <code\n' +
    '          className={bem("code", "inline")}\n' +
    '        >{`word ++ " " ++ subject`}</code>{" "}\n' +
    '        is a String concatenated with two other Strings.\n' +
    '      </p>\n' +
    '      <p>\n' +
    "        As written above, we're using the lambda form of a function, which has\n" +
    '        an implicit <code className={bem("code", "inline")}>{`return`}</code>{" "}\n' +
    '        value, after the <code className={bem("code", "inline")}>{` =>`}</code>.\n' +
    '      </p>\n' +
    "      <p>Let's see what happens if we define the function with curly braces:</p>\n" +
    '      <Code language="mad">{`say :: String -> String -> String\n' +
    'say = (word, subject) => {\n' +
    '  word ++ " " ++ subject\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>This causes the compiler to be unhappy:</p>\n' +
    '      <Code language="none">{`[error]: Type error\n' +
    '     ╭──▶ /how-to/Say.main.mad@6:1-8:1\n' +
    '     │\n' +
    '   6 │ ╭┤ say :: String -> String -> String\n' +
    '   7 │ │  say = (verb, subject) => {\n' +
    '   8 │ ├┤   verb ++ " " ++ subject\n' +
    '     • │\n' +
    '     • ╰╸ expected:\n' +
    '     •      String -> String -> String\n' +
    '     •\n' +
    '     •    but found:\n' +
    '     •      String -> String -> {}\n' +
    '     •\n' +
    '─────╯\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        You can see from the error that this change has caused the function to\n' +
    '        no longer return a String, but instead this set of empty curly braces:{" "}\n' +
    '        <code className={bem("code", "inline")}>{`{}`}</code> — this is also\n' +
    '        known as the{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Unit">\n' +
    '          Unit\n' +
    '        </a>{" "}\n' +
    '        type.\n' +
    '      </p>\n' +
    '      <p>\n' +
    '        In order to fix this we need to add the explicit{" "}\n' +
    '        <code className={bem("code", "inline")}>{`return`}</code> keyword (or\n' +
    '        change the type signature so that it returns Unit instead:{" "}\n' +
    '        <code\n' +
    '          className={bem("code", "inline")}\n' +
    '        >{`String -> String -> {}`}</code>\n' +
    '        )\n' +
    '      </p>\n' +
    '      <Code language="mad">{`say :: String -> String -> String\n' +
    'say = (word, subject) => {\n' +
    '  return word ++ " " ++ subject\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <h3 className={bem("header", "subsection")}>Function invocation</h3>\n' +
    '      <p>To see this in action, we need to call the function:</p>\n' +
    '      <Code language="mad">{`main = () => {\n' +
    '  pipe(\n' +
    '    say("hello"),\n' +
    '    IO.putLine\n' +
    '  )("world")\n' +
    '}\n' +
    '`}</Code>\n' +
    "      <p>This adds a few minor wrinkles, so let's talk through them.</p>\n" +
    '      <h3 className={bem("header", "subsection")}>A main function</h3>\n' +
    '      <p>\n' +
    '        In order to call our function from the command line, we need to define a{" "}\n' +
    '        <code className={bem("code", "inline")}>{`main`}</code> function. This\n' +
    '        function is special in that it <em>must</em> be named{" "}\n' +
    '        <code className={bem("code", "inline")}>{`main`}</code> and it needs to\n' +
    '        return{" "}\n' +
    '        <a className="internal" href="/Reference/Literals/Unit">\n' +
    '          Unit\n' +
    '        </a>{" "}\n' +
    '        / <code className={bem("code", "inline")}>{`{}`}</code>.\n' +
    '      </p>\n' +
    '      <h3 className={bem("header", "subsection")}>\n' +
    '        Partial application and curry\n' +
    '      </h3>\n' +
    '      <p>\n' +
    '        Recall earlier when we were showing{" "}\n' +
    '        <code className={bem("code", "inline")}>{`Math.max`}</code>, we passed\n' +
    '        in two parameters in the same invocation:\n' +
    '      </p>\n' +
    '      <Code language="mad">{`> Math.max(100, 20)\n' +
    '100 :: Integer\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        If we chose to, we could call our{" "}\n' +
    '        <code className={bem("code", "inline")}>{`say`}</code> function in this\n' +
    '        same manner\n' +
    '      </p>\n' +
    '      <Code language="mad">{`main = () => {\n' +
    '  say("hello", "world")\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    "        However, this will run but not print anything. That's because we've now\n" +
    '        omitted the{" "}\n' +
    '        <code className={bem("code", "inline")}>{`IO.putLine`}</code> function,\n' +
    '        which actually prints the input.\n' +
    '      </p>\n' +
    '      <Code language="mad">{`main = () => {\n' +
    '  IO.putLine(say("hello", "world"))\n' +
    '}\n' +
    '`}</Code>\n' +
    '      <p>\n' +
    '        <strong>Now</strong> '... 9530 more characters
]
