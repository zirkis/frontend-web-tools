module.exports = {
  'globals': {
    'fetch': false,
    'Headers': false,
    'Request': false,
    '__WEB__': true,
    '__NODE__': true,
    'VERSION': true,
    '__webpack_public_path__': true,
    'jsdom': false,
    'renderWithRedux': true,
  },
  'env': {
    'jest/globals': true,
  },
  'plugins': [
    'babel',
    'json',
    'react',
    'react-hooks',
    'jest',
    'prefer-object-spread',
    'leboncoin',
    'lodash',
    'sort-class-members',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'legacyDecorators': true,
    },
  },
  'extends': [
    'standard',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:leboncoin/recommended',
  ],
  'rules': {
    'lodash/import-scope': ['error', 'method'],
    'sort-class-members/sort-class-members': [0, {
      'order': [
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[arrow-function-properties]',
        '[conventional-private-properties]',
        'constructor',
        '[lifecycle]',
        '[event-handlers]',
        '[methods]',
        '[conventional-private-methods]',
        '[rendering]',
        '[render]',
      ],
      'groups': {
        'lifecycle': [
          { 'name': 'componentDidCatch' },
          { 'name': 'componentWillMount' },
          { 'name': 'componentDidMount' },
          { 'name': 'componentWillReceiveProps' },
          { 'name': 'shouldComponentUpdate' },
          { 'name': 'componentWillUpdate' },
          { 'name': 'componentDidUpdate' },
          { 'name': 'componentWillUnmount' },
        ],
        'event-handlers': [
          {
            'name': '/handle.+/',
            'type': 'method',
          },
          {
            'name': '/on.+/',
            'type': 'method',
          },
        ],
        'rendering': [
          {
            'name': '/render.+/',
            'type': 'method',
          },
        ],
        'render': [
          {
            'name': 'render',
            'type': 'method',
          },
        ],
      },
      'accessorPairPositioning': 'getThenSet',
    }],
    'react/jsx-curly-spacing': [
      'error',
      'never',
    ],
    'react/jsx-tag-spacing': [
      'error',
    ],
    'react/no-danger': [
      'error',
    ],
    'react/no-unescaped-entities': ['error', {'forbid': ['\'']}],
    'react/no-deprecated': 0,
    'react/jsx-no-target-blank': 0, // We already have a custom rule for that
    'react/no-children-prop': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
    'camelcase': 'off',
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    'default-case': 'error',
    'jsx-quotes': 'error',
    'max-len': 'off',
    'babel/no-invalid-this': 'error',
    'no-return-await': 'error',
    'no-var': 'error',
    'no-use-before-define': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'radix': 'error',
    'react/display-name': 'off',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'prefer-object-spread/prefer-object-spread': 'error',
    'object-shorthand': 'error',
    'prefer-promise-reject-errors': 0,
    'jest/valid-expect-in-promise': 0,
    'complexity': 0,
    'no-param-reassign': ["warn", { "props": true }]
  },
}
