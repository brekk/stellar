//import { toString } from "hast-util-to-string"
import { visit } from "unist-util-visit"
import { when, curry, pipe, map, __, always } from "ramda"
import { inspect } from "node:util"

export const visitByFocusWithElement = curry((focus, pred, effect, tree) => {
  visit(tree, focus, when(pred, effect))
})

export const visitAllWhere = visitByFocusWithElement("element")
export const visitAll = visitAllWhere(always(true))
export const logWhere = visitAll(__, console.log)
export const xTraceWhere = curry((fn, where, tag, raw) =>
  visitAll(
    where,
    (x) => {
      fn(tag, x)
      return x
    },
    raw,
  ),
)

export const traceWhere = xTraceWhere(console.log)
export const inspectWhere = xTraceWhere((msg, x) => {
  console.log(msg)
  inspect(x, false, null, true)
})
