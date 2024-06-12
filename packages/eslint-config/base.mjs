import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.?(m|c)js?(x)", "**/*.ts?(x)"],

  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettier,
  ],

  plugins: {
    onlyWarn,
  },

  languageOptions: {
    ecmaVersion: "latest",
  },

  ignores: ["node_modules/**", "dist/**", "build/**", "tmp/**"],
});
