
# slack-emojinator

```bash
npm install -g slack-emojinator
```

# run

```bash
slack-emojinator --config config.json
# or
slack-emojinator --config config.json --env production
# or
NODE_ENV=production slack-emojinator --config config.json
```

# config

```js
{
  "development": {
    "organization": "organization-name",
    "session": "open up the Network tab in DevTools and copy your cookie session here",
    "icons": "/absolute/path/to/icons/location"
  }
}
```

# icons

```bash
.
├── chill.png
├── giggles.png
├── hmm.png
├── impossibru.png
├── jackie.png
├── megusta.png
├── mmm.png
├── motherof.png
├── nice.png
├── notbad.png
├── omg.png
├── oo.png
├── orly.png
├── really.png
├── sir.png
├── sweetjesus.png
├── trollface.png
├── wat.png
├── wtf.png
├── yey.png
└── yuno.png
```

# result

```bash
crumb s-1487086275-96ffe966ad-☃
ok chill.png
ok giggles.png
ok hmm.png
ok impossibru.png
ok jackie.png
ok megusta.png
ok mmm.png
ok motherof.png
ok nice.png
ok notbad.png
ok omg.png
ok oo.png
ok orly.png
ok really.png
ok sir.png
ok sweetjesus.png
ok trollface.png
ok wat.png
ok wtf.png
ok yey.png
ok yuno.png
DONE!
```

# usage

> Type `:trollface:` in Slack and you'll see `trollface.png`


  [name-taken-from-here]: https://github.com/smashwilson/slack-emojinator
