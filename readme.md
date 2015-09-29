# Unfold ESLint config
This is a linting config which extends [Airbnb's javascript styleguide](https://github.com/airbnb/javascript) with our own modifications.

## Installation
### Global
To add to your existing eslint configuration install: 
`npm install -g eslint-plugin-react eslint-config-airbnb unfold/eslint-config`

and add `"extends": ["airbnb", "unfold"]` to your `~/.eslintrc` file.

### Local
To add to a local project install:
`npm install -D eslint eslint-plugin-react eslint-config-airbnb unfold/eslint-config`

create an `.eslintrc` file
```json
{
  "extends": ["airbnb", "unfold"]
}
```

or add the rule to your `package.json`
```json
{
  "eslintConfig": {
    "extends": ["airbnb", "unfold"]
  }
}
```
