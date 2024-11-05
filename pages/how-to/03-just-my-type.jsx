import blem from "blem"

// import CopyMe from "@/assets/copy-me.svg"
import Code from "@/components/Code"

// This file was automatically generated from:
// mad-notes/notes/How-To Guides/03 - Just My Type.md

export const NAME = "03-just-my-type"
export const DATA = {
  tags: ["guide"],
}
export const COMPONENT = () => {
  const bem = blem("HowToGuide")
  return (
    <article className={bem("")}>
      <h1 className={bem("header", "main")}>
        <div className={bem("title")}>Just My Type</div>
        <div className={bem("index", "ordinal")}>03</div>
      </h1>
      <h2 className={bem("header", "section")}>Summary</h2>
      <ul>
        <li>Types</li>
        <li>Type Inference</li>
        <li>Literal Types</li>
        <li>Aliases</li>
        <li>Pipe = Curry</li>
      </ul>
    </article>
  )
}

export default COMPONENT

