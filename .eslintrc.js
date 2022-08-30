module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'markdown',
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'no-console': 'off',
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': [2, {
      'singleline': 1,
      'multiline': 1,
    }],
  }
}
