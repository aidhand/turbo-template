import globals from "globals";
import tseslint from "typescript-eslint";

import { base } from "@repo/eslint-config";
import qwik from "eslint-plugin-qwik";

export default tseslint.config({
  extends: [...base],

  plugins: {
    qwik,
  },

  languageOptions: {
    sourceType: "module",
    globals: {
      ...globals.node,
      ...globals.browser,
    },

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});
