import blem from "blem"

// This file was automatically generated from:
// mad-notes/notes/How-To Guides/01 - Hello mad, mad world.md

export const NAME = "01-hello-mad-mad-world"
export const DATA = {
  tags: ["fundamentals", "literals", "logic", "guide"],
}
export const COMPONENT = () => {
  const bem = blem(NAME)
  return (
    <article className={bem("")}>
      <h2>Installation</h2>
      <p>
        There are a few ways to{" "}
        <a className="internal" href="/Reference/Installation">
          install Madlib
        </a>
        , but the easiest is to install it via{" "}
        <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">
          npm
        </a>
        .
      </p>
      <pre>
        <code className="language-sh">{`npm i @madlib-lang/madlib -g
`}</code>
      </pre>
      <p>
        This should make the 𝚖𝚊𝚍𝚕𝚒𝚋 binary globally accessible, so you should
        see a version number when you run 𝚖𝚊𝚍𝚕𝚒𝚋 --𝚟𝚎𝚛𝚜𝚒𝚘𝚗:
      </p>
      <pre>
        <code className="language-sh">{`&gt; madlib --version
madlib@0.23.13
`}</code>
      </pre>
      <h2>REPL</h2>
      <p>
        For lightweight or exploratory work, you can work within the Madlib REPL
        (Read-Eval-Print-Loop). This is a sandbox where you can write code as
        you learn more about Madlib.
      </p>
      <p>
        The REPL can be accessed with the command 𝚖𝚊𝚍𝚕𝚒𝚋 𝚛𝚎𝚙𝚕, which should
        bring up an interactive session that looks like this:
      </p>
      <pre>
        <code>{`------ REPL - Madlib@0.23.13 -------------------------------
Available commands:
  :help           show help (alias :h)
  :exit           exit the REPL (alias :e)
  :multi          start multiline mode (alias :m)
  :type NAME      show the type of an assignment (alias :t)
  :reset          reset the state of the repl (alias :r)
-----------------------------------------------------------

`}</code>
      </pre>
      <p>
        Here are some simple expressions you can start to play with in the REPL
        before we set up a more serious{" "}
        <a className="internal" href="/How-To Guides/05 - The March of IDEs">
          programming environment
        </a>
        .
      </p>
      <h3>Basic arithmetic</h3>
      <pre>
        <code className="language-mad">{`&gt; 5 + 5
10 :: Integer
&gt; 10 - 100
-90 :: Integer
&gt; 42 * 10
420 :: Integer
&gt; 9 / 6
1.5 :: Float
`}</code>
      </pre>
      <p>
        As you can see, we're not doing anything complex here — but this
        illustrates the way we can write an expression and see the result, along
        with its type. The type is indicated by the double-colon / :: , which
        can be read as "has type of".
      </p>
      <p>
        These follow the usual precedence rules, and can be changed by adding
        parentheses:
      </p>
      <pre>
        <code className="language-mad">{`&gt; 3 * 4 / (5 - 6)
-12 :: Float
&gt; 3 * 4 / 5 - 6
-3.6 :: Float
&gt; 3 * (4 / 5) - 6
-3.5999999999999996 :: Float
`}</code>
      </pre>
      <h2>Basic boolean logic</h2>
      <p>Here are some simple boolean expressions.</p>
      <pre>
        <code className="language-mad">{`&gt; true &#x26;&#x26; false
false :: Boolean
&gt; true &#x26;&#x26; true
true :: Boolean
&gt; false || true
true :: Boolean
&gt; !(false &#x26;&#x26; false)
true :: Boolean
`}</code>
      </pre>
      <p>
        As you can see, we have the literals 𝚝𝚛𝚞𝚎 and 𝚏𝚊𝚕𝚜𝚎, as well as the
        logical 𝘢𝘯𝘥 (&#x26;&#x26;) and logical 𝘰𝘳 (||) operators. Finally, we
        have a boolean negation operator (!) which is infixed.
      </p>
      <h2>Asserting equality</h2>
      <p>Here we can assert the equality of things:</p>
      <pre>
        <code className="language-mad">{`&gt; 5 == 5
true :: Boolean
&gt; 1 == 0
false :: Boolean
&gt; 7 != 0
true :: Boolean
&gt; "hello" == "world"
false :: Boolean
`}</code>
      </pre>
      <p>
        Here we've shown the equality operator ( ==) as well as the inequality
        operator (!=).
      </p>
      <h2>Try mixing types</h2>
      <p>What happens if we try to do something like add 𝟻 + "𝚌𝚘𝚘𝚕"?</p>
      <pre>
        <code className="language-mad">{`&gt; 5 + "cool"
Instance not found

No instance for 'Number String' was found.

Hint: Verify that you imported the module where the Number
instance for 'String' is defined
Note: Remember that instance methods are automatically imported when the module is imported, directly, or indirectly.
`}</code>
      </pre>
      <p>
        Here Madlib is saying that "cool" is not a number and so it doesn't know
        how to add 5 to it. We'll discuss this kind of error more later on.
      </p>
      <h2>Import functions from Prelude</h2>
      <p>
        In Madlib, we call our standard library 𝘗𝘳𝘦𝘭𝘶𝘥𝘦 (a name taken from
        Haskell). We'll go over everything it has to offer in more detail
        shortly, but let's start by importing 𝙼𝚊𝚝𝚑:
      </p>
      <pre>
        <code className="language-mad">{`&gt; import Math from "Math"
`}</code>
      </pre>
      <p>
        <a href="https://github.com/madlib-lang/madlib/blob/master/prelude/__internal__/Math.mad">
          Math
        </a>{" "}
        has a few functions we can play with. We won't go over everything here,
        just enough to give a general sense of how it works.
      </p>
      <pre>
        <code className="language-mad">{`&gt; import Math from "Math"
&gt; Math.max(100, 20)
100 :: Integer
&gt; Math.min(100, 20)
20 :: Integer
&gt; x = Math.divide(3, 4)
0.75 :: Float
&gt; y = Math.sqrt(100)
10 :: Float
&gt; z = Math.abs(-1000)
1000 :: Integer
&gt; x
0.75 :: Float
`}</code>
      </pre>
      <p>
        As you can see, functions are invoked by passing them parameters within
        parentheses. We've also assigned some of these results to variables (𝚡,
        𝚢, 𝚣) and we've shown that the REPL will remember these values in
        memory.
      </p>
      <p>
        We'll also try playing with a few of the functions defined in{" "}
        <a href="https://github.com/madlib-lang/madlib/blob/master/prelude/__internal__/List.mad">
          List
        </a>
        . Again, this isn't comprehensive but will give a sense of how they
        work:
      </p>
      <pre>
        <code className="language-mad">{`&gt; import List from "List"
&gt; List.range(0, 10)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] :: List Integer
&gt; nums = [1,2,3,4,500,7,92,30]
&gt; List.reduce(Math.max, -1, nums)
500 :: Integer
&gt; List.reduce((a, b) =&gt; a + b, 0, nums)
639 :: Integer
`}</code>
      </pre>
      <h5>Summary</h5>
      <p>In this document, we've discussed:</p>
      <ul>
        <li>
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world#installation"
          >
            Installing
          </a>{" "}
          Madlib
        </li>
        <li>
          Using the{" "}
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world#repl"
          >
            REPL
          </a>
        </li>
        <li>
          Basic{" "}
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world#basic-arithmetic"
          >
            arithmetic
          </a>
        </li>
        <li>
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world#basic-boolean-logic"
          >
            Boolean logic
          </a>
        </li>
        <li>
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world#asserting-equality"
          >
            Expressions of equality
          </a>
        </li>
        <li>
          <a
            className="internal"
            href="/How-To Guides/01 - Hello mad, mad world"
          >
            Importing
          </a>{" "}
          and invoking functions from Prelude
        </li>
      </ul>
    </article>
  )
}

export default COMPONENT

