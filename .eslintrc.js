module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "latest",
    },
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "sort-imports": "off",
    "import/order": "off",
    "no-unused-vars": "off",
    "simple-import-sort/sort": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
  },
};
