const Discord = require('discord.js')

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (bot, message, args) => {
    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Pong!").setColor("RED").setDescription(`Ping: ${bot.ws.ping}ms`)
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'ping', // default = file name (without the extention)
    description: "Shows the bot's ping." // default is "None"
}