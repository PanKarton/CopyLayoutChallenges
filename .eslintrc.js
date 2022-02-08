module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Makes single quote, because without this thing prettier will change "" to '' but after that eslint will throw error
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  },
  plugins: ['prettier'],
};
