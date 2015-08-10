# Unfold ESLint config
This config extends [Airbnb's javascript styleguide](https://github.com/airbnb/javascript) with modifications.

## Installation
### Global
To add to your existing eslint configuration install: 
`npm install -g eslint-plugin-react unfold/eslint-config`

and add `"extends": "unfold"` to your `~/.eslintrc` file.

### Local
To add to a local project install:
`npm install -D eslint eslint-plugin-react unfold/eslint-config`

create an `.eslintrc` file
```json
{
  "extends": "unfold"
}
```

or add the rule to your `package.json`
```json
{
  "eslintConfig": {
    "extends": "unfold"
  }
}
```
