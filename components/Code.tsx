import type { ReactNode } from "react"
import blem from "blem"

interface CodeProps {
  caption?: string
  filename?: string
  language: string
  content: string
}

const Code = ({ caption, content }: CodeProps) => {
  const bem = blem("Code")
  return (
    <figure className={bem("")}>
      <figcaption className={bem("caption")}>{caption}</figcaption>
      <pre className={bem("preformatted")}>
        <code className={bem("content")}>{content}</code>
      </pre>
    </figure>
  )
}

export default Code
