module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb'].map(require.resolve),
  plugins: ['eslint-plugin-appjson'],
  env: {
    browser: true,
  },
  rules: {
    'appjson/require-process-env-defined': [1, ['NODE_ENV']],
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
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/require-default-props': 0,

    // Overwide rule that enforces trailing commas in function arguments
    // https://github.com/airbnb/javascript/blob/c29e615be497767264b09fa826229f71fd015c38/packages/eslint-config-airbnb-base/rules/errors.js#L4
    'comma-dangle': [2, 'always-multiline'],

  },
}
