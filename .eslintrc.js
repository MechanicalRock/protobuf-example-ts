// eslint-disable-next-line no-undef
module.exports = {
  env: {
    'jest/globals': true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'require-await': 2,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/indent': ['error', 2],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    '@typescript-eslint/no-empty-function': [0],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ]
  }
}
