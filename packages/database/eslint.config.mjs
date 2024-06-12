// @ts-check

import tseslint from "typescript-eslint";

import { standard } from "@repo/eslint-config";

export default tseslint.config({
  extends: [...standard],

  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
