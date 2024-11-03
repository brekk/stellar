import blem from "blem"

// This file was automatically generated from:
// mad-notes/notes/How-To Guides/02 - Syntactic Tactics.md

export const NAME = "02-syntactic-tactics"
export const DATA = {
  tags: ["guide"],
}
export const COMPONENT = () => {
  const bem = blem("HowToGuide")
  return (
    <article className={bem("")}>
      <h1 className={bem("header", "main")}>
        <div className={bem("title")}>Syntactic Tactics</div>
        <div className={bem("index", "ordinal")}>02</div>
      </h1>
      <p>
        In the last guide we went over the core of writing functions in Madlib.
        In this guide we’ll be going over common syntactic affordances.
      </p>
      <h2 className={bem("header", "section")}>Comments</h2>
      <p>
        Madlib has C-style comments which start with two slashes: (
        <code>//</code>) for single-lines or wrapped with (<code>/*</code> …{" "}
        <code>*/</code> ) for multi-line comments.
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`// this is a comment
/*
This is a
Multiline
Comment
*/
`}</code>
      </pre>
      <h3 className={bem("header", "subsection")}>Documentation comments</h3>
      <p>
        Additionally there is a special format for creating comments which can
        be automatically parsed and turned into structured JSON — and a{" "}
        <a href="https://github.com/madlib-lang/maddoc">secondary tool</a> which
        can then turn this JSON into a website.
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`/**
 * A function for division
 * @since 0.0.1
 * @example
 * third = div($, 3)
 */
div :: Integer -> Integer -> Float
div = (n, d) => n / d
`}</code>
      </pre>
      <p>
        This is discussed more in{" "}
        <a className="internal" href="/How-To Guides/06 - Developmental Growth">
          a future guide
        </a>
        .
      </p>
      <h2 className={bem("header", "section")}>Conditionals</h2>
      <p>
        Conditions are syntactically expressed in one of two ways in Madlib.
      </p>
      <h3 className={bem("header", "subsection")}>Ternary Expressions</h3>
      <p>Ternary conditions can be written in the following way:</p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`x = 5
// condition ? truthy case : falsy case
y = x >= 0 ? “less than zero” : “greater than zero”
`}</code>
      </pre>
      <p>
        Note the way in which this is a logical expression. If we wanted to nest
        more cases, we could do so:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`y = x == 0 ? “is zero” : x &#x3C; 0 ? “less than zero” : “greater than zero”
`}</code>
      </pre>
      <h3 className={bem("header", "subsection")}>if … else</h3>
      <p>
        The other way of expressing conditions syntactically in Madlib is using
        the <code>if</code> and <code>else</code> keywords.
      </p>
      <p>
        Unlike some other languages, this syntax is designed to be identical to
        ternary expressions: each branch has a single expression by default, has
        implicit returns and must be consistent in return type. Additionally,
        like ternary expressions, there is no means of short-circuiting.
      </p>
      <p>
        Here’s the same example from above using <code>if</code> /{" "}
        <code>else</code> syntax:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`x = 5
y = if (x >= 0) {
  “less than zero”
} else {
  “greater than zero”
}
`}</code>
      </pre>
      <p>
        Note the way in which this is also an expression and it is being
        assigned to <code>y</code>.
      </p>
      <p>As constructed, we cannot add an additional expression to this.</p>
      <p>
        If we wanted to add an additional expression, we’d need to add a{" "}
        <a className="internal" href="/Reference/Do Notation">
          do
        </a>{" "}
        keyword:
      </p>
      <h4 className={bem("header", "example")}>
        Using <code>do</code> notation with conditionals
      </h4>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`import IO from “IO”
x = 5
y = if (x >= 0) do {
  IO.putLine(“happy path”)
  return “less than zero”
} else {
  “greater than zero”
}
`}</code>
      </pre>
      <p>
        Note the way in which we’ve added both a <code>do</code> and an explicit{" "}
        <code>return</code> here. If the return is omitted, the compiler will
        infer that the return type of this expression is Unit / <code>{}</code>.
        Without the <code>do</code>, this is syntactically invalid because it’s
        not a single expression.
      </p>
      <h4 className={bem("header", "example")}>
        Implicit <code>else</code>
      </h4>
      <p>
        Given the behavior described above, the compiler will automatically add
        an <code>else</code> clause when it is omitted. However, this else
        clause necessarily returns{" "}
        <a className="internal" href="/Reference/Literals/Unit">
          Unit
        </a>{" "}
        in order to be type consistent. Therefore it can be helpful to use{" "}
        <code>do</code> notation to eschew an explicit return value when using{" "}
        <code>if</code> clauses by themselves.
      </p>
      <h2 className={bem("header", "section")}>Modules</h2>
      <p>
        Madlib allows segmentation of programs into separate files, called
        Modules. These are defined by usage of <code>import</code>s and{" "}
        <code>export</code>s.
      </p>
      <h3 className={bem("header", "subsection")}>Imports</h3>
      <p>
        As we saw in the{" "}
        <a className="internal" href="/How-To Guides/01 - Hello mad, mad world">
          previous guide
        </a>
        , files can make use of <code>import</code> syntax to pull in content
        from{" "}
        <a className="internal new" href="Prelude">
          Prelude
        </a>
        . They can also use the same syntax to pull in content from local
        modules or 3rd-party modules.
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`import MyLocalModule from "./MyLocalModule"
// or, direct access
import { method, variable } from "./MyLocalModule"
`}</code>
      </pre>
      <h3 className={bem("header", "subsection")}>Exports</h3>
      <p>The example above would correspond to a local module like this:</p>
      <pre className={bem("language", "mad")} data-lang="mad">
        <code className="language-mad">{`localvar = “this value is inaccessible outside of this file”
export variable = “this value is accessible elsewhere”

method :: a -> a
method = (x) => x
`}</code>
      </pre>
      <p>
        We'll discuss more about{" "}
        <a className="internal" href="/How-To Guides/03 - Just My Type">
          defining functions
        </a>{" "}
        in the next guide.
      </p>
      <h5 className={bem("header", "summary")}>Summary</h5>
      <p>In this document, we've discussed:</p>
      <ul>
        <li>
          Annotating a Madlib program with{" "}
          <a
            className="internal"
            href="/How-To Guides/02 - Syntactic Tactics#comments"
          >
            comments
          </a>
        </li>
        <li>
          Defining branching logic with{" "}
          <a
            className="internal"
            href="/How-To Guides/02 - Syntactic Tactics#conditionals"
          >
            conditionals
          </a>
        </li>
        <li>
          Segmenting programs via modules, using{" "}
          <a
            className="internal"
            href="/How-To Guides/02 - Syntactic Tactics#imports"
          >
            imports
          </a>{" "}
          and{" "}
          <a
            className="internal"
            href="/How-To Guides/02 - Syntactic Tactics#exports"
          >
            exports
          </a>
        </li>
        <li>
          Defining and running a <code>main</code> function
        </li>
      </ul>
    </article>
  )
}

export default COMPONENT
