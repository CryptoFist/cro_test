module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/function-component-definition": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    // � Reducers in redux-toolkit https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
  settings: { "import/resolver": { node: { paths: ["src"] } } },
};
