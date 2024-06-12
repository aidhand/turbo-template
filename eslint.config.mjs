// @ts-check

import { base } from "@repo/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [...base],

  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  ignores: ["apps/**", "packages/**"],
});
