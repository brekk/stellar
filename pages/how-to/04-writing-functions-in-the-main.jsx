import blem from "blem"

// import CopyMe from "@/assets/copy-me.svg"
import Code from "@/components/Code"

// This file was automatically generated from:
// mad-notes/notes/How-To Guides/04 - Writing functions, in the main.md

export const NAME = "04-writing-functions-in-the-main"
export const DATA = {
  tags: ["functions", "curry", "composition", "guide"],
}
export const COMPONENT = () => {
  const bem = blem("HowToGuide")
  return (
    <article className={bem("")}>
      <h1 className={bem("header", "main")}>
        <div className={bem("title")}>Writing functions, in the main</div>
        <div className={bem("index", "ordinal")}>04</div>
      </h1>
      <p>
        In the{" "}
        <a className="internal" href="/How-To Guides/01 - Hello mad, mad world">
          previous guide
        </a>{" "}
        we talked through the basics of{" "}
        <a
          className="internal"
          href="/How-To Guides/01 - Hello mad, mad world#installation"
        >
          installing
        </a>{" "}
        Madlib and running the{" "}
        <a
          className="internal"
          href="/How-To Guides/01 - Hello mad, mad world#repl"
        >
          REPL
        </a>
        .
      </p>
      <p>
        In this document we'll talk through writing our own{" "}
        <code className={bem("code", "inline")}>{`main`}</code> function, which
        will allow us to save and execute code outside of the REPL.
      </p>
      <h2 className={bem("header", "section")}>Defining functions</h2>
      <p>
        Let's step through the process of defining functions in a standalone{" "}
        <code className={bem("code", "inline")}>{`main`}</code> file. Open up
        your favorite text editor and write the following
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`import IO from "IO"

say :: String -> String -> String
say = (word, subject) => word ++ " " ++ subject

main = () => {
  pipe(
    say("hello"),
    IO.putLine
  )("world")
}
`}
        </code>
      </pre>
      <p>
        Save this file as{" "}
        <code className={bem("code", "inline")}>{`Say.main.mad`}</code> or
        whatever you like, as long as it ends in{" "}
        <code className={bem("code", "inline")}>{`.mad`}</code>.
      </p>
      <p>
        We can run this file standalone with the command{" "}
        <code className={bem("code", "inline")}>{`madlib run`}</code>:
      </p>
      <pre className={bem("language", "sh")} data-lang="sh">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "sh")}>
          <div className={bem("language-meta")}>{`sh`}</div>
          {`> madlib run Say.main.mad
hello world
`}
        </code>
      </pre>
      <p>
        Let's talk through exactly what we've done here, as there's a few
        pieces.
      </p>
      <h3 className={bem("header", "subsection")}>Type signatures</h3>
      <p>
        Firstly, we've defined a function named{" "}
        <code className={bem("code", "inline")}>{`say`}</code>. It has a{" "}
        <a className="internal" href="/Reference/Type System/Type Signatures">
          type signature
        </a>
        ,{" "}
        <code
          className={bem("code", "inline")}
        >{`say :: String -> String -> String`}</code>{" "}
        — this means that it is a binary function, taking two parameters (of
        type <code className={bem("code", "inline")}>{`String`}</code>), and its
        return type is also a{" "}
        <code className={bem("code", "inline")}>{`String`}</code>. Learning to
        read these type signatures can take some time, but we'll continue to
        articulate what they mean as we go through this process.
      </p>
      <p>
        Let's see a few examples of more signatures (we're omitting the function
        implementations here, but they'd normally be required in order to be
        syntactically valid):
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`func :: Integer -> String
`}
        </code>
      </pre>
      <p>
        The function above takes an{" "}
        <a
          className="internal"
          href="/Reference/Literals/Numeric Types#integer"
        >
          Integer
        </a>{" "}
        and returns a{" "}
        <a className="internal" href="/Reference/Literals/String">
          String
        </a>
        .
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`otherFunc :: Float -> Float -> Float -> List Float
`}
        </code>
      </pre>
      <p>
        This <code className={bem("code", "inline")}>{`otherFunc`}</code> takes
        three{" "}
        <a className="internal" href="/Reference/Literals/Numeric Types#float">
          floating point numbers
        </a>{" "}
        and returns a{" "}
        <a className="internal" href="/Reference/Literals/List">
          List
        </a>{" "}
        of floating point numbers.
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`thirdFunction :: Char -> String -> Boolean
`}
        </code>
      </pre>
      <p>
        This <code className={bem("code", "inline")}>{`thirdFunction`}</code>{" "}
        takes a{" "}
        <a className="internal" href="/Reference/Literals/Char">
          Char
        </a>{" "}
        and a{" "}
        <a className="internal" href="/Reference/Literals/String">
          String
        </a>{" "}
        and returns a{" "}
        <a className="internal" href="/Reference/Literals/Boolean">
          Boolean
        </a>
        .
      </p>
      <h3 className={bem("header", "subsection")}>Function implementation</h3>
      <p>
        Coming back to the{" "}
        <code className={bem("code", "inline")}>{`say`}</code> function we
        defined earlier, let's talk through its actual implementation details:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`say :: String -> String -> String
say = (word, subject) => word ++ " " ++ subject
`}
        </code>
      </pre>
      <p>
        This definition allows us to associate a concrete implementation with
        the types in the signature. So{" "}
        <code className={bem("code", "inline")}>{`word`}</code> here is a{" "}
        <a className="internal" href="/Reference/Literals/String">
          String
        </a>
        , as is <code className={bem("code", "inline")}>{`subject`}</code>. The
        return type is also a String, which works out nicely because the
        concatenation operator{" "}
        <code className={bem("code", "inline")}>{`++`}</code> works on Strings
        and Lists, so{" "}
        <code
          className={bem("code", "inline")}
        >{`word ++ " " ++ subject`}</code>{" "}
        is a String concatenated with two other Strings.
      </p>
      <p>
        As written above, we're using the lambda form of a function, which has
        an implicit <code className={bem("code", "inline")}>{`return`}</code>{" "}
        value, after the <code className={bem("code", "inline")}>{` =>`}</code>.
      </p>
      <p>Let's see what happens if we define the function with curly braces:</p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`say :: String -> String -> String
say = (word, subject) => {
  word ++ " " ++ subject
}
`}
        </code>
      </pre>
      <p>This causes the compiler to be unhappy:</p>
      <pre className={bem("language", "none")}>
        <code>{`[error]: Type error
     ╭──▶ /how-to/Say.main.mad@6:1-8:1
     │
   6 │ ╭┤ say :: String -> String -> String
   7 │ │  say = (verb, subject) => {
   8 │ ├┤   verb ++ " " ++ subject
     • │
     • ╰╸ expected:
     •      String -> String -> String
     •
     •    but found:
     •      String -> String -> {}
     •
─────╯
`}</code>
      </pre>
      <p>
        You can see from the error that this change has caused the function to
        no longer return a String, but instead this set of empty curly braces:{" "}
        <code className={bem("code", "inline")}>{`{}`}</code> — this is also
        known as the{" "}
        <a className="internal" href="/Reference/Literals/Unit">
          Unit
        </a>{" "}
        type.
      </p>
      <p>
        In order to fix this we need to add the explicit{" "}
        <code className={bem("code", "inline")}>{`return`}</code> keyword (or
        change the type signature so that it returns Unit instead:{" "}
        <code
          className={bem("code", "inline")}
        >{`String -> String -> {}`}</code>
        )
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`say :: String -> String -> String
say = (word, subject) => {
  return word ++ " " ++ subject
}
`}
        </code>
      </pre>
      <h3 className={bem("header", "subsection")}>Function invocation</h3>
      <p>To see this in action, we need to call the function:</p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  pipe(
    say("hello"),
    IO.putLine
  )("world")
}
`}
        </code>
      </pre>
      <p>This adds a few minor wrinkles, so let's talk through them.</p>
      <h3 className={bem("header", "subsection")}>A main function</h3>
      <p>
        In order to call our function from the command line, we need to define a{" "}
        <code className={bem("code", "inline")}>{`main`}</code> function. This
        function is special in that it <em>must</em> be named{" "}
        <code className={bem("code", "inline")}>{`main`}</code> and it needs to
        return{" "}
        <a className="internal" href="/Reference/Literals/Unit">
          Unit
        </a>{" "}
        / <code className={bem("code", "inline")}>{`{}`}</code>.
      </p>
      <h3 className={bem("header", "subsection")}>
        Partial application and curry
      </h3>
      <p>
        Recall earlier when we were showing{" "}
        <code className={bem("code", "inline")}>{`Math.max`}</code>, we passed
        in two parameters in the same invocation:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`> Math.max(100, 20)
100 :: Integer
`}
        </code>
      </pre>
      <p>
        If we chose to, we could call our{" "}
        <code className={bem("code", "inline")}>{`say`}</code> function in this
        same manner
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  say("hello", "world")
}
`}
        </code>
      </pre>
      <p>
        However, this will run but not print anything. That's because we've now
        omitted the{" "}
        <code className={bem("code", "inline")}>{`IO.putLine`}</code> function,
        which actually prints the input.
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  IO.putLine(say("hello", "world"))
}
`}
        </code>
      </pre>
      <p>
        <strong>Now</strong> this function will print correctly.
      </p>
      <p>
        <em>So why did the original version work?</em>
      </p>
      <p>
        This is because we had <em>partially-applied</em> the{" "}
        <code className={bem("code", "inline")}>{`say`}</code> function.
        Consider this bit of code:
      </p>
      <pre className={bem("language", "none")}>
        <code>{`main = () => {
  hi = say("hello")
  IO.putLine(hi("world")) // "hello world"
  IO.putLine(hi("there")) // "hello there"
  IO.putLine(hi("hey")) // "hello hey"
}
`}</code>
      </pre>
      <p>
        Recall that our <code className={bem("code", "inline")}>{`say`}</code>{" "}
        function takes two parameters. Unlike some other more imperative
        languages, if we invoke a function with fewer parameters than it needs,
        in Madlib we get back a function which expects the remaining parameters.
        This is called currying a function. <em>All functions</em> in Madlib are
        curried.
      </p>
      <p>
        If we come back to our definition, you can think of this as crossing off
        one of the values in the signature:
      </p>
      <pre className={bem("language", "none")}>
        <code>{`// this function is curried!
say :: String -> String -> String
say = (word, subject) => word ++ " " ++ subject

// partial application
hi :: String -> String
hi = say("hello")
`}</code>
      </pre>
      <p>
        (Since the Madlib compiler is smart and capable, we don't actually need
        to define the type definition for{" "}
        <code className={bem("code", "inline")}>{`hi`}</code>, but we've done so
        here for illustrative porpoises.)
      </p>
      <h3 className={bem("header", "subsection")}>Composition</h3>
      <p>
        If you recall from our original example, we used the special{" "}
        <code className={bem("code", "inline")}>{`pipe`}</code> function:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  pipe(
    say("hello"),
    IO.putLine
  )("world")
}
`}
        </code>
      </pre>
      <p>
        This allows us to <em>compose</em> functions together. When we discussed
        partial application above, we named the partially applied version of{" "}
        <code className={bem("code", "inline")}>{`say`}</code>:
      </p>
      <pre className={bem("language", "none")}>
        <code>{`hi = say("hello")
`}</code>
      </pre>
      <p>
        And we wrapped its invocation in{" "}
        <code className={bem("code", "inline")}>{`IO.putLine`}</code>:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`IO.putLine(hi("world"))
`}
        </code>
      </pre>
      <p>
        The <code className={bem("code", "inline")}>{`pipe`}</code> function
        allows us to write things with fewer parentheses and compose operations
        from top to bottom:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`pipe(
  say("hello"),
  IO.putLine
)("world")
`}
        </code>
      </pre>
      <p>This is the exact same as:</p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`IO.putLine(say("hello")("world"))
`}
        </code>
      </pre>
      <p>
        This may seem confusing or needless at first, but as we add more
        complexity you'll start to see the utility of this alternative form.
      </p>
      <h3 className={bem("header", "subsection")}>
        Function application operator
      </h3>
      <p>
        We've managed to articulate quite a few things with this simple example.
        Let's add two more things to our understanding before we present you
        with a challenge.
      </p>
      <p>
        If you recall above, we used the{" "}
        <code className={bem("code", "inline")}>{`Math.divide`}</code> function
        like so:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`> Math.divide(3, 4)
0.75 :: Float
`}
        </code>
      </pre>
      <p>
        This is the same as using the division operator (
        <code className={bem("code", "inline")}>{`/`}</code>):{" "}
        <code className={bem("code", "inline")}>{`3 / 4`}</code>
      </p>
      <p>
        If we wanted to partially apply the{" "}
        <code className={bem("code", "inline")}>{`Math.divide`}</code> function,
        we'd always be passing in the numerator{" "}
        <code className={bem("code", "inline")}>{`3`}</code> before the
        denominator <code className={bem("code", "inline")}>{`4`}</code>.
        However, we can use the function application operator (
        <code className={bem("code", "inline")}>{`$`}</code>) to make this
        function much more valuable without changing its definition:
      </p>
      <pre className={bem("language", "none")}>
        <code>{`half = Math.divide($, 2)
half(100) // 50
`}</code>
      </pre>
      <h3 className={bem("header", "subsection")}>
        Applying a function to a List
      </h3>
      <p>
        When we were discussing partial application before, we had an example
        like this:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  hi = say("hello")
  IO.putLine(hi("world")) // "hello world"
  IO.putLine(hi("there")) // "hello there"
  IO.putLine(hi("hey")) // "hello hey"
}
`}
        </code>
      </pre>
      <p>
        Using the <code className={bem("code", "inline")}>{`map`}</code>{" "}
        function, we can re-use the same functionality while avoiding
        repetition:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`main = () => {
  x = map(pipe(say("hello"), IO.putLine))(
    ["world", "there", "hey"]
  )
}
`}
        </code>
      </pre>
      <p>
        However, you'll note that as written, the resulting value{" "}
        <code className={bem("code", "inline")}>{`x`}</code> isn't a List of
        Strings, it's a List of{" "}
        <a className="internal" href="/Reference/Literals/Unit">
          Unit
        </a>
        : <code className={bem("code", "inline")}>{`[{}, {}, {}]`}</code>. This
        is because <code className={bem("code", "inline")}>{`IO.putLine`}</code>{" "}
        prints a value but doesn't return it.
      </p>
      <p>
        If we wanted to change that, we could do something like this instead, to
        capture the transformed map:
      </p>
      <pre className={bem("language", "mad")} data-lang="mad">
        {/*<div className={bem("button", "copy")}><CopyMe /></div>*/}
        <code className={bem("language-content", "mad")}>
          <div className={bem("language-meta")}>{`mad`}</div>
          {`import IO from "IO"
import String from "String"

main = () => {
  x = map(
    say("hello"),
    ["world", "there", "hey"]
  )
  pipe(
    String.join(", "),
    IO.putLine
  )(x) // "hello world, hello there, hello hey"
}
`}
        </code>
      </pre>
      <p>
        NB: If you try to print{" "}
        <code className={bem("code", "inline")}>{`x`}</code> without turning it
        into a String first via{" "}
        <code className={bem("code", "inline")}>{`String.join`}</code>, you'll
        see an error similar to this:
      </p>
      <pre className={bem("language", "none")}>
        <code>{`[error]: Type error
     ╭──▶ /how-to/Say.main.mad@30:14-30:15
     │
  30 │   IO.putLine(x)
     •              ┬
     •              ╰╸ expected:
     •                   String
     •
     •                 but found:
     •                   List String
     •
─────╯
`}</code>
      </pre>
      <p>
        This is most easily worked around by calling{" "}
        <code className={bem("code", "inline")}>{`show`}</code> first, like{" "}
        <code className={bem("code", "inline")}>{`IO.putLine(show(x))`}</code> —
        We won't go into too much detail for the purposes of keeping this
        document reasonably short, but{" "}
        <code className={bem("code", "inline")}>{`show`}</code> is a useful and{" "}
        <a className="internal" href="/Reference/Interfaces/Show">
          semi-magical function
        </a>{" "}
        which coerces values into Strings.
      </p>
      <h3 className={bem("header", "subsection")}>Challenge:</h3>
      <p>
        In order to test our understanding and comprehension, here's a small
        challenge:{" "}
        <a
          className="internal"
          href="/Tutorials/Challenges/Say Anything, Say Many Things"
        >
          Say Anything, Say Many Things
        </a>
      </p>
      <h3 className={bem("header", "subsection")}>Solution:</h3>
      <p>
        See a possible solution to the challenge{" "}
        <a
          className="internal"
          href="/Tutorials/Solutions/Solution - Say Anything, Say Many Things"
        >
          here
        </a>
      </p>
      <h2 className={bem("header", "section")}>Summary</h2>
      <ul>
        <li>
          Function{" "}
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#defining-functions"
          >
            definitions
          </a>
        </li>
        <li>
          Defining and running a{" "}
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#a-main-function"
          >
            main
          </a>{" "}
          function
        </li>
        <li>
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#partial-application-and-curry"
          >
            Curried
          </a>{" "}
          functions and their (partial){" "}
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#function-application-operator"
          >
            applications
          </a>
        </li>
        <li>
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#composition"
          >
            Composing
          </a>{" "}
          functions
        </li>
        <li>
          Applying functions to a List with{" "}
          <a
            className="internal"
            href="/How-To Guides/04 - Writing functions, in the main#applying-a-function-to-a-list"
          >
            map
          </a>
        </li>
      </ul>
    </article>
  )
}

export default COMPONENT

