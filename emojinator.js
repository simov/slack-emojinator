
var compose = require('request-compose')
compose.Request.multipart = require('request-multipart')
var request = compose.client

var fs = require('fs')
var path = require('path')


module.exports = ({org, cookie, icons}) => compose(
  _ => request({
    url: `https://${org}.slack.com/customize/emoji`,
    headers: {cookie},
  }),
  ({body}) => body.replace(
    /[\s\S]+<input type="hidden" name="crumb" value="([^"]+)" \/>[\s\S]+/,
    '$1'
  ),
  (crumb) => (async function* () {
    for (var file of fs.readdirSync(icons)) {
      await request({
        method: 'POST',
        url: `https://${org}.slack.com/customize/emoji`,
        headers: {cookie},
        multipart: {
          add: '1',
          crumb,
          name: path.basename(file, path.extname(file)),
          mode: 'data',
          img: fs.createReadStream(path.join(icons, file)),
        }
      })
      yield file
    }
  })(),
)()
