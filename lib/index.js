
var fs = require('fs')
var path = require('path')
var request = require('@request/client')

var config

var get = () => new Promise((resolve, reject) => {
  request({
    method: 'GET',
    url: 'https://' + config.organization + '.slack.com/customize/emoji',
    headers: {
      cookie: config.session
    },
    callback: (err, res, body) => err ? reject(err) : resolve([res,
      body.replace(
        /[\s\S]+<input type="hidden" name="crumb" value="([^"]+)" \/>[\s\S]+/,
        '$1')
    ])
  })
})

var post = (file, crumb) => new Promise((resolve, reject) => {
  request({
    method: 'POST',
    url: 'https://' + config.organization + '.slack.com/customize/emoji',
    headers: {
      cookie: config.session
    },
    multipart: {
      add: '1',
      crumb,
      name: path.basename(file, path.extname(file)),
      mode: 'data',
      img: fs.createReadStream(path.join(config.icons, file))
    },
    length: true,
    callback: (err, res, body) => err ? reject(err) : resolve([res, body])
  })
})

module.exports = (args) => (
  {config} = args,
  {get, post}
)
