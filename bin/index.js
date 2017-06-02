#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))

if (!argv.config) {
  console.error('Specify --config file')
  process.exit()
}

var fs = require('fs')
var path = require('path')

var env = process.env.NODE_ENV || argv.env || 'development'
var config = require(path.resolve(process.cwd(), argv.config))[env]
var emojinator = require('../')({config})

emojinator.get().then(([res, crumb]) => {
  console.log('crumb', crumb)

  var files = fs.readdirSync(config.icons)

  ;(function next (index) {
    if (index === files.length) {
      console.log('DONE!')
      process.exit()
    }

    emojinator.post(files[index], crumb)
      .then(([res, body]) => {
        console.log('ok', files[index])
        next(++index)
      })
      .catch((err) => {
        console.error(file[index], err)
        process.exit()
      })

  })(0)
})
.catch((err) => {
  console.error(err)
  process.exit()
})
