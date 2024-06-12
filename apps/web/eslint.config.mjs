// @ts-check

import tseslint from "typescript-eslint";

import { qwik } from "@repo/eslint-config";

export default tseslint.config({
  extends: [...qwik],

  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
