module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb'].map(require.resolve),
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'max-len': [2, {
      tabWidth: 2,
      code: 100,
      ignoreComments: false,
      ignorePattern: '^\\s*test',
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'no-param-reassign': [2, { props: false }],
    semi: [2, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
}
