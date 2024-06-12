// @ts-check

import { qwik } from "@repo/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [...qwik],

  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
