# LewdsGA / API
## Installation
```bash
npm i lewds.api
```
## how to use
```js
const { LewdClient } = require('lewds.api');
const api = new LewdClient({ KEY: "Your-API-Key-Here" })

// NSFW Endpoints
api.nsfw("thighs").then(result => {
    console.log(result)
})

// SFW Endpoints
api.sfw("pat").then(result => {
    console.log(result)
})

```

# endpoints

### || NSFW  ||

- ass 
- boobs 
- feet 
- gifs 
- hboobs 
- hentai 
- athighs
- kink 
- thighs 
- yuri
- threed
- furfuta
- furgif
- futa
- milk
- pantsu
- random
- slime
- trap

### || SFW  ||

- kiss
- hug
- pat

For an up to date list on endpoints visit [lewds.ga/docs](https://lewds.ga/docs)

For support join our [discord](https://discord.gg/invite/8SKspRB)
