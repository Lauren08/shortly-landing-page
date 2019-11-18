module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": 0,
    "prefer-arrow-callback": 0,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "arrow-parens": 0,
    import: 0,
    radix: 0,
    indent: "off",
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "no-confusing-arrow": 0,
    "class-methods-use-this": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "operator-linebreak": 0,
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"],
      },
    ],
    "no-unused-vars": [
      1,
      {
        argsIgnorePattern: "res|next|^err",
      },
    ],
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
