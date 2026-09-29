import eslintPluginAstro from "eslint-plugin-astro"
import tsParser from "@typescript-eslint/parser"

export default [
  {
    ignores: [".astro/**", "dist/**", "node_modules/**"],
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    rules: {
      
    },
  },
]