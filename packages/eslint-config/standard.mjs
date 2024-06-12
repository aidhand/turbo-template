// @ts-check

import globals from "globals";
import tseslint from "typescript-eslint";

import { base } from "@repo/eslint-config";

export default tseslint.config({
  extends: [...base],

  languageOptions: {
    sourceType: "module",

    globals: {
      ...globals.node,
    },
  },
});
