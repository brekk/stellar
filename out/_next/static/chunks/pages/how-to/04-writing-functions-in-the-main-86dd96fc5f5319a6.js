(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{9224:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to/04-writing-functions-in-the-main",function(){return a(2081)}])},2081:function(e,n,a){"use strict";a.r(n),a.d(n,{COMPONENT:function(){return c},DATA:function(){return r},NAME:function(){return t}});var i=a(5893),s=a(2916),l=a.n(s);let t="04-writing-functions-in-the-main",r={tags:["functions","curry","composition","guide"]},c=()=>{let e=l()("HowToGuide");return(0,i.jsxs)("article",{className:e(""),children:[(0,i.jsxs)("h1",{className:e("header","main"),children:[(0,i.jsx)("div",{className:e("title"),children:"Writing functions, in the main"}),(0,i.jsx)("div",{className:e("index","ordinal"),children:"04"})]}),(0,i.jsxs)("p",{children:["In the"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/01 - Hello mad, mad world",children:"previous guide"})," ","we talked through the basics of"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/01 - Hello mad, mad world#installation",children:"installing"})," ","Madlib and running the"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/01 - Hello mad, mad world#repl",children:"REPL"}),"."]}),(0,i.jsxs)("p",{children:["In this document we'll talk through writing our own"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"main"})," function, which will allow us to save and execute code outside of the REPL."]}),(0,i.jsx)("h2",{className:e("header","section"),children:"Defining functions"}),(0,i.jsxs)("p",{children:["Let's step through the process of defining functions in a standalone"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"main"})," file. Open up your favorite text editor and write the following"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'import IO from "IO"\n\nsay :: String -> String -> String\nsay = (word, subject) => word ++ " " ++ subject\n\nmain = () => {\n  pipe(\n    say("hello"),\n    IO.putLine\n  )("world")\n}\n'})}),(0,i.jsxs)("p",{children:["Save this file as ",(0,i.jsx)("code",{children:"Say.main.mad"})," or whatever you like, as long as it ends in ",(0,i.jsx)("code",{children:".mad"}),"."]}),(0,i.jsxs)("p",{children:["We can run this file standalone with the command"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"madlib run"}),":"]}),(0,i.jsx)("pre",{className:e("language","sh"),"data-lang":"sh",children:(0,i.jsx)("code",{className:"language-sh",children:"> madlib run Say.main.mad\nhello world\n"})}),(0,i.jsx)("p",{children:"Let's talk through exactly what we've done here, as there's a few pieces."}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Type signatures"}),(0,i.jsxs)("p",{children:["Firstly, we've defined a function named"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"}),". It has a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Type System/Type Signatures",children:"type signature"}),","," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say :: String -> String -> String"})," ","— this means that it is a binary function, taking two parameters (of type ",(0,i.jsx)("code",{className:e("code","inline"),children:"String"}),"), and its return type is also a"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"String"}),". Learning to read these type signatures can take some time, but we'll continue to articulate what they mean as we go through this process."]}),(0,i.jsx)("p",{children:"Let's see a few examples of more signatures (we're omitting the function implementations here, but they'd normally be required in order to be syntactically valid):"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:"func :: Integer -> String\n"})}),(0,i.jsxs)("p",{children:["The function above takes an"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Numeric Types#integer",children:"Integer"})," ","and returns a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/String",children:"String"}),"."]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:"otherFunc :: Float -> Float -> Float -> List Float\n"})}),(0,i.jsxs)("p",{children:["This ",(0,i.jsx)("code",{className:e("code","inline"),children:"otherFunc"})," takes three"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Numeric Types#float",children:"floating point numbers"})," ","and returns a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/List",children:"List"})," ","of floating point numbers."]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:"thirdFunction :: Char -> String -> Boolean\n"})}),(0,i.jsxs)("p",{children:["This ",(0,i.jsx)("code",{className:e("code","inline"),children:"thirdFunction"})," ","takes a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Char",children:"Char"})," ","and a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/String",children:"String"})," ","and returns a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Boolean",children:"Boolean"}),"."]}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Function implementation"}),(0,i.jsxs)("p",{children:["Coming back to the"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"})," function we defined earlier, let's talk through its actual implementation details:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'say :: String -> String -> String\nsay = (word, subject) => word ++ " " ++ subject\n'})}),(0,i.jsxs)("p",{children:["This definition allows us to associate a concrete implementation with the types in the signature. So"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"word"})," here is a"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/String",children:"String"}),", as is ",(0,i.jsx)("code",{className:e("code","inline"),children:"subject"}),". The return type is also a String, which works out nicely because the concatenation operator ",(0,i.jsx)("code",{children:"++"})," works on Strings and Lists, so"," ",(0,i.jsx)("code",{children:'word ++ " " ++ subject'})," is a String concatenated with two other Strings."]}),(0,i.jsxs)("p",{children:["As written above, we're using the lambda form of a function, which has an implicit ",(0,i.jsx)("code",{className:e("code","inline"),children:"return"})," ","value, after the ",(0,i.jsx)("code",{className:e("code","inline"),children:" =>"}),"."]}),(0,i.jsx)("p",{children:"Let's see what happens if we define the function with curly braces:"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'say :: String -> String -> String\nsay = (word, subject) => {\n  word ++ " " ++ subject\n}\n'})}),(0,i.jsx)("p",{children:"This causes the compiler to be unhappy:"}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:'[error]: Type error\n     ╭──▶ /how-to/Say.main.mad@6:1-8:1\n     │\n   6 │ ╭┤ say :: String -> String -> String\n   7 │ │  say = (verb, subject) => {\n   8 │ ├┤   verb ++ " " ++ subject\n     • │\n     • ╰╸ expected:\n     •      String -> String -> String\n     •\n     •    but found:\n     •      String -> String -> {}\n     •\n─────╯\n'})}),(0,i.jsxs)("p",{children:["You can see from the error that this change has caused the function to no longer return a String, but instead this set of empty curly braces:"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"{}"})," — this is also known as the"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Unit",children:"Unit"})," ","type."]}),(0,i.jsxs)("p",{children:["In order to fix this we need to add the explicit"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"return"})," keyword (or change the type signature so that it returns Unit instead:"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"String -> String -> {}"}),")"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'say :: String -> String -> String\nsay = (word, subject) => {\n  return word ++ " " ++ subject\n}\n'})}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Function invocation"}),(0,i.jsx)("p",{children:"To see this in action, we need to call the function:"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  pipe(\n    say("hello"),\n    IO.putLine\n  )("world")\n}\n'})}),(0,i.jsx)("p",{children:"This adds a few minor wrinkles, so let's talk through them."}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"A main function"}),(0,i.jsxs)("p",{children:["In order to call our function from the command line, we need to define a"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"main"})," function. This function is special in that it ",(0,i.jsx)("em",{children:"must"})," be named"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"main"})," and it needs to return"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Unit",children:"Unit"})," ","/ ",(0,i.jsx)("code",{className:e("code","inline"),children:"{}"}),"."]}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Partial application and curry"}),(0,i.jsxs)("p",{children:["Recall earlier when we were showing ",(0,i.jsx)("code",{children:"Math.max"}),", we passed in two parameters in the same invocation:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:"> Math.max(100, 20)\n100 :: Integer\n"})}),(0,i.jsxs)("p",{children:["If we chose to, we could call our"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"})," function in this same manner"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  say("hello", "world")\n}\n'})}),(0,i.jsxs)("p",{children:["However, this will run but not print anything. That's because we've now omitted the ",(0,i.jsx)("code",{children:"IO.putLine"})," function, which actually prints the input."]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  IO.putLine(say("hello", "world"))\n}\n'})}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Now"})," this function will print correctly."]}),(0,i.jsx)("p",{children:(0,i.jsx)("em",{children:"So why did the original version work?"})}),(0,i.jsxs)("p",{children:["This is because we had ",(0,i.jsx)("em",{children:"partially-applied"})," the"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"})," function. Consider this bit of code:"]}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:'main = () => {\n  hi = say("hello")\n  IO.putLine(hi("world")) // "hello world"\n  IO.putLine(hi("there")) // "hello there"\n  IO.putLine(hi("hey")) // "hello hey"\n}\n'})}),(0,i.jsxs)("p",{children:["Recall that our ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"})," ","function takes two parameters. Unlike some other more imperative languages, if we invoke a function with fewer parameters than it needs, in Madlib we get back a function which expects the remaining parameters. This is called currying a function. ",(0,i.jsx)("em",{children:"All functions"})," in Madlib are curried."]}),(0,i.jsx)("p",{children:"If we come back to our definition, you can think of this as crossing off one of the values in the signature:"}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:'// this function is curried!\nsay :: String -> String -> String\nsay = (word, subject) => word ++ " " ++ subject\n\n// partial application\nhi :: String -> String\nhi = say("hello")\n'})}),(0,i.jsxs)("p",{children:["(Since the Madlib compiler is smart and capable, we don't actually need to define the type definition for"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"hi"}),", but we've done so here for illustrative porpoises.)"]}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Composition"}),(0,i.jsxs)("p",{children:["If you recall from our original example, we used the special"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"pipe"})," function:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  pipe(\n    say("hello"),\n    IO.putLine\n  )("world")\n}\n'})}),(0,i.jsxs)("p",{children:["This allows us to ",(0,i.jsx)("em",{children:"compose"})," functions together. When we discussed partial application above, we named the partially applied version of"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"say"}),":"]}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:'hi = say("hello")\n'})}),(0,i.jsxs)("p",{children:["And we wrapped its invocation in ",(0,i.jsx)("code",{children:"IO.putLine"}),":"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'IO.putLine(hi("world"))\n'})}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{className:e("code","inline"),children:"pipe"})," function allows us to write things with fewer parentheses and compose operations from top to bottom:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'pipe(\n  say("hello"),\n  IO.putLine\n)("world")\n'})}),(0,i.jsx)("p",{children:"This is the exact same as:"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'IO.putLine(say("hello")("world"))\n'})}),(0,i.jsx)("p",{children:"This may seem confusing or needless at first, but as we add more complexity you'll start to see the utility of this alternative form."}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Function application operator"}),(0,i.jsx)("p",{children:"We've managed to articulate quite a few things with this simple example. Let's add two more things to our understanding before we present you with a challenge."}),(0,i.jsxs)("p",{children:["If you recall above, we used the ",(0,i.jsx)("code",{children:"Math.divide"})," function like so:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:"> Math.divide(3, 4)\n0.75 :: Float\n"})}),(0,i.jsxs)("p",{children:["This is the same as using the division operator (",(0,i.jsx)("code",{children:"/"}),"):"," ",(0,i.jsx)("code",{children:"3 / 4"})]}),(0,i.jsxs)("p",{children:["If we wanted to partially apply the ",(0,i.jsx)("code",{children:"Math.divide"})," function, we'd always be passing in the numerator ",(0,i.jsx)("code",{children:"3"})," before the denominator ",(0,i.jsx)("code",{children:"4"}),". However, we can use the function application operator (",(0,i.jsx)("code",{children:"$"}),") to make this function much more valuable without changing its definition:"]}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:"half = Math.divide($, 2)\nhalf(100) // 50\n"})}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Applying a function to a List"}),(0,i.jsx)("p",{children:"When we were discussing partial application before, we had an example like this:"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  hi = say("hello")\n  IO.putLine(hi("world")) // "hello world"\n  IO.putLine(hi("there")) // "hello there"\n  IO.putLine(hi("hey")) // "hello hey"\n}\n'})}),(0,i.jsxs)("p",{children:["Using the ",(0,i.jsx)("code",{className:e("code","inline"),children:"map"})," ","function, we can re-use the same functionality while avoiding repetition:"]}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'main = () => {\n  x = map(pipe(say("hello"), IO.putLine))(\n    ["world", "there", "hey"]\n  )\n}\n'})}),(0,i.jsxs)("p",{children:["However, you'll note that as written, the resulting value"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"x"})," isn't a List of Strings, it's a List of"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Literals/Unit",children:"Unit"}),":"," ",(0,i.jsxs)("code",{children:["[",", ",", ","]"]}),". This is because ",(0,i.jsx)("code",{children:"IO.putLine"})," prints a value but doesn't return it."]}),(0,i.jsx)("p",{children:"If we wanted to change that, we could do something like this instead, to capture the transformed map:"}),(0,i.jsx)("pre",{className:e("language","mad"),"data-lang":"mad",children:(0,i.jsx)("code",{className:"language-mad",children:'import IO from "IO"\nimport String from "String"\n\nmain = () => {\n  x = map(\n    say("hello"),\n    ["world", "there", "hey"]\n  )\n  pipe(\n    String.join(", "),\n    IO.putLine\n  )(x) // "hello world, hello there, hello hey"\n}\n'})}),(0,i.jsxs)("p",{children:["NB: If you try to print"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"x"})," without turning it into a String first via ",(0,i.jsx)("code",{children:"String.join"}),", you'll see an error similar to this:"]}),(0,i.jsx)("pre",{className:e("language","none"),children:(0,i.jsx)("code",{children:"[error]: Type error\n     ╭──▶ /how-to/Say.main.mad@30:14-30:15\n     │\n  30 │   IO.putLine(x)\n     •              ┬\n     •              ╰╸ expected:\n     •                   String\n     •\n     •                 but found:\n     •                   List String\n     •\n─────╯\n"})}),(0,i.jsxs)("p",{children:["This is most easily worked around by calling"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"show"})," first, like"," ",(0,i.jsx)("code",{children:"IO.putLine(show(x))"})," — We won't go into too much detail for the purposes of keeping this document reasonably short, but"," ",(0,i.jsx)("code",{className:e("code","inline"),children:"show"})," is a useful and"," ",(0,i.jsx)("a",{className:"internal",href:"/Reference/Interfaces/Show",children:"semi-magical function"})," ","which coerces values into Strings."]}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Challenge:"}),(0,i.jsxs)("p",{children:["In order to test our understanding and comprehension, here's a small challenge:"," ",(0,i.jsx)("a",{className:"internal",href:"/Tutorials/Challenges/Say Anything, Say Many Things",children:"Say Anything, Say Many Things"})]}),(0,i.jsx)("h3",{className:e("header","subsection"),children:"Solution:"}),(0,i.jsxs)("p",{children:["See a possible solution to the challenge"," ",(0,i.jsx)("a",{className:"internal",href:"/Tutorials/Solutions/Solution - Say Anything, Say Many Things",children:"here"})]}),(0,i.jsx)("h2",{className:e("header","section"),children:"Summary"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Function"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#defining-functions",children:"definitions"})]}),(0,i.jsxs)("li",{children:["Defining and running a"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#a-main-function",children:"main"})," ","function"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#partial-application-and-curry",children:"Curried"})," ","functions and their (partial)"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#function-application-operator",children:"applications"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#composition",children:"Composing"})," ","functions"]}),(0,i.jsxs)("li",{children:["Applying functions to a List with"," ",(0,i.jsx)("a",{className:"internal",href:"/How-To Guides/04 - Writing functions, in the main#applying-a-function-to-a-list",children:"map"})]})]})]})};n.default=c}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9224)}),_N_E=e.O()}]);