module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  rules: {
    "no-console": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    semi: ["error", "always"],
    "@typescript-eslint/naming-convention": "off",
  },
};
