#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))

if (argv.help) {
  console.log(`
    --config /path/to/config.json
    --env name
  `)
  process.exit()
}

if (!argv.config) {
  console.error('Specify --config file')
  process.exit()
}
if (!argv.env) {
  console.error('Specify --env')
  process.exit()
}

var path = require('path')
var config = require(path.resolve(process.cwd(), argv.config))[argv.env]
var emojinator = require('./')

;(async () => {
  for await (var file of await emojinator(config)) {
    console.log(file)
  }
  console.log('DONE!')
})()
.catch(console.error)
