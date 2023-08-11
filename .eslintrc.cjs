/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off',
    'no-tabs': 0,
    'comma-dangle': [0],
    'arrow-parens': 0,
    'import/prefer-default-export': [0],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    semi: 1,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],

    'no-eval': 1,
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'linebreak-style': 0,
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true
      }
    ],
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'max-len': [
      'warn',
      {
        code: 100
      }
    ],
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-implicit-globals': 'off',
    'no-mixed-operators': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'import/no-extraneous-dependencies': [0],
    'object-curly-newline': 0
  }
};
