import type { ReactNode } from "react"
import CopyMe from "@/assets/copy-me.svg"
import blem from "blem"
import { curry } from "ramda"

import "@/components/Code.scss"

interface CodeProps {
  inline?: boolean
  caption?: string
  filename?: string
  language: string
  children: string
}

const count = curry((regex, str) => ((str || "").match(regex) || []).length)

const totalLines = count(/\n/g)
const Code = ({ caption, inline = false, children, language }: CodeProps) => {
  const bem = blem("Code")
  /*
<div className={bem("button", "copy")}>
  <CopyMe />
</div>
  */
  const tLines = totalLines(children)
  const len = children
    .split(/\n/g)
    .map((z) => z.trim().length)
    .reduce((a, b) => (b > a ? b : a), 0)
  if (inline) {
    return <code className={bem("inline")}>{children}</code>
  }
  return (
    <figure
      data-width={len}
      data-lines={tLines}
      className={bem("", [
        language,
        `width-${len < 36 ? "narrow" : len > 60 ? "wide" : "median"}`,
        `lines-${tLines < 3 ? "small" : tLines > 10 ? "large" : "medium"}`,
      ])}
    >
      <figcaption className={bem("caption")}>{caption}</figcaption>
      <div className={bem("content")}>
        <pre className={bem("language", language)}>
          <code className={bem("language-content", language)}>
            {language !== "none" ? (
              <div className={bem("language-meta")}>{language}</div>
            ) : null}
            {children}
          </code>
        </pre>
      </div>
    </figure>
  )
}

export default Code
