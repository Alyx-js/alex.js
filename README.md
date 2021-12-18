# LewdsGA / API
*(Might be buggy still)*

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
```

## AutoUnmute + Mute system
> Mutes and unmutes.
```js
// index.js

const { Client } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS"]});// Not sure about guild_members..?
const { LewdClient } = require('lewds.api');
const lewds = new LewdClient({ KEY: "Your-API-Key-Here" })
client.lewds = lewds;

client.lewds.connectToMongoDB("Your-mongoDB-URL-Here");
client.lewds.timed(client)// auto unmutes

// event when someones unmuted
client.on("timedUnmute", (user, guild)=>{
    console.log(`${user.name} (${user.id}) was unmuted in ${guild.name} (${guild.id})`)
})
...
```
```js
// mute.js
        ...
    /** member { Discord.User }
      * time { Number }
      * reason { String }
      */
    client.lewds.forced(member, time, reason)
        ...
```
```js
// unmute.js
        ...
     /** 
      * client { Discord.Client }
      * user { Discord.User }
      */
    client.lewds.forced(client, user)
        ...
```

## Quote Command.js
> Quotes a message via a messageID from message channel or Message URL.
```js
        ...              ...                 ...
                // QuoteCommand.js
client.lewds.quoteId(client, args[0], msg.channel).then(res => { 
// msg.channel (OR message.channel) is needed just the way it is unless you call the current channel differently.
const embed = new MessageEmbed()
    .setDescription(`\`\`\`${res.content}\`\`\``)
    .setTimestamp(res.createdAt)
    .setColor(res.author.accentColor || "WHITE")
    .setAuthor(res.author.username, res.author.avatarURL({ type: "png", dynamic: true, size: 4096 }), res.author.avatarURL({ type: "png", dynamic: true, size: 4096 }))
if (res.attachments && res.attachments.size > 0) {
    embed.setImage(res.attachments.first().url)
}
    console.log(res.content)
    msg.reply({ embeds: [embed] });
    });

...              ...                 ...
```
```js
// Captcha system / event
const { LewdCaptcha } = require("lewds.api");
client.on("guildMemberAdd", (member) => {
    
// =============================================================================
    //  for captcha setup / sending.
    const role = member.guild.roles.cache.get("xxxxxxxxxxxxxxxxx");
    const channel = member.guild.channels.fetch("xxxxxxxxxxxxxxxxx");
    new LewdCaptcha.Captcha(client).present(member, role, channel);
// =============================================================================
    // For antiJoin raid checking: 
    new LewdCaptcha.Captcha(client).check(member, days, roleId, joinCount);
    // member = user
    // days = amount of days user has been registered for
    // roleId = mute/unverified roleId
    // joinCount = max amount of new joins before kicking this amount of users that joined recently. (the time frame is 6500ms [6~ seconds])
// =============================================================================

});
```
# endpoints
--------------------------
### || NSFW  ||

- Just read [Docs](https://docs.lewds.fun) please...

### || SFW  ||
- chat

For an up to date list on endpoints visit [lewds.fun](https://docs.lewds.fun)

For support join our [discord](https://discord.gg/invite/8SKspRB)
