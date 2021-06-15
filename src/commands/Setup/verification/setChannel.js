const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    if (channel == null) {
        message.channel.send({
            embed: new Discord.MessageEmbed().setTitle("Verification")
                .setColor("RED").setDescription(`Couldn't find that channel!`)
        });
        return;
    }

    set('verification.channelID', channel.id);

    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Verification")
            .setColor("BLUE").setDescription(`Successfully set the verification channel to: ${channel}`)
    })

}

module.exports.info = {
    description: "Set the channel for the verification embed.", // default is "None"
}