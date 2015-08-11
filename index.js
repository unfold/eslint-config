var path = require('path')
var stripComments = require('strip-json-comments')
var fs = require('fs')
var airbnbConfig = require('airbnb-style/packages/eslint-config-airbnb')
var merge = require('lodash/object/merge')

var filename = path.join(__dirname, '.eslintrc')
var data = fs.readFileSync(filename, {encoding: 'utf-8'})
var dataWithoutComments = stripComments(data)
var customConfig = JSON.parse(dataWithoutComments)

var config = merge(airbnbConfig, customConfig)

module.exports = config
