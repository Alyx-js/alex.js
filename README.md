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

// Chat Endpoint
api.chat("MESSAGE%20CONTENT", "USERID").then(result => {
    console.log(result)
})

api.welcomeImage("userName", "https://image.com/avatarURL", "https://image.com/BackgroundURL", "#800813").then(result => {
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
- blow
- fuck

### || SFW  ||
- chat

For an up to date list on endpoints visit [lewds.fun](https://lewds.fun)

For support join our [discord](https://discord.gg/invite/8SKspRB)
