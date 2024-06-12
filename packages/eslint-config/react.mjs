import globals from "globals";
import tseslint from "typescript-eslint";

import { base } from "@repo/eslint-config";

export default tseslint.config({
  extends: [...base],

  languageOptions: {
    globals: {
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
