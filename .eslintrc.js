module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "@react-native-community",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["./src/**/*.js", "./__tests__/"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "no-loops",
    "unused-imports",
    "react-hooks",
  ],
  rules: {
    "quotes": ["warn", "double"],
    "no-loops/no-loops": ["error"],
    "no-undef": ["warn", { typeof: false }],
    "no-prototype-builtins": "warn",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-alert": "off",
    "no-catch-shadow": "warn",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "no-useless-escape": "off",
    "react-native/no-inline-styles": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-var": "error",
    "prefer-const": "warn",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  },
};
