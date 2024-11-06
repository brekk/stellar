import { configurate } from "altercation"
import { curry, pipe } from "ramda"
import {
  YARGS_CONFIG,
  CONFIG_DEFAULTS,
  HELP_CONFIG,
} from "./excavator-config.mjs"

export const excavatorWithCancel = curry(
  function _excavatorWithCancel(cancel, argv) {
    return pipe(
      configurate(
        YARGS_CONFIG,
        { ...CONFIG_DEFAULTS, basePath: process.cwd() },
        HELP_CONFIG,
        { name: "excavator", description: "EXCAVATOR", banner: "" },
      ),
    )(argv)
  },
)
