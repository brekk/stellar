declare module 'blem' {
  export as namespace BlemLib

  export = Blem

  declare function Blem(base: string): Blem.ElementModifier
  declare namespace Blem {
    export function ElementModifier(
      element: string,
      modifier: string | string[]
    ): string
  }
}
