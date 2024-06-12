import globals from "globals";
import tseslint from "typescript-eslint";

import next from "@next/eslint-plugin-next";
import { base } from "@repo/eslint-config";

export default tseslint.config({
  extends: [...base],

  plugins: {
    next,
  },

  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
      React: "readonly",
      JSX: "readonly",
    },

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});
