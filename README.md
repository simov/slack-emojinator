
# slack-emojinator

```bash
npm install -g slack-emojinator
```

# run

```bash
slack-emojinator --config config.json --env env-name
```

# config

```js
{
  "env-name": {
    "org": "slack organization subdomain",
    "cookie": "open up the Network tab in DevTools and copy your cookie session here",
    "icons": "/absolute/path/to/icons/location"
  }
}
```

> Name the icon files with their respective shortcodes, for example: `trollface.png` will become `:trollface:` in Slack.


  [name-taken-from-here]: https://github.com/smashwilson/slack-emojinator
