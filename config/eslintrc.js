const path = require('path');

module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@cspell/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2016,
      sourceType: 'module'
    },
    plugins: [
      'prettier',
      'react',
      '@typescript-eslint',
      'simple-import-sort',
      'unused-imports',
      '@cspell'
    ],
    rules: {
      'prettier/prettier': ['error'],
      'unused-imports/no-unused-imports': ['error'],
      'simple-import-sort/exports': ['error'],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
            ],
            ['^react', '^\\w'],
            ['^(@|config/)(/*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$']
          ]
        }
      ],
      '@cspell/spellchecker': [
        'warn',
        {
          customWordListFile: path.join(__dirname, 'cspell.wordlist.txt'),
          autoFix: false
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
