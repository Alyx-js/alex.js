const Discord = require("discord.js");

/**
 * 
 * @param {Discord.Client} client
 * @param {any} options
 * @param {Discord.User} user
 * @returns {Discord.DMChannel | Discord.TextChannel}
 */

module.exports = async function handleChannelType(client, options, user) {
    let channel;
    try {
        channel = await user.createDM();
    } catch {
        return
    }
    return channel
}