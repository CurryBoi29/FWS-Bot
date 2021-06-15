const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let channel = message.guild.channels.cache.get(get('verification.channelID'));

    if (channel == null) {
        message.channel.send({
            embed: new Discord.MessageEmbed().setColor("RED").setTitle("Verification")
                .setDescription(`Couldn't find a channel with the id: \`${get('verification.channelID')}\``)
        });
        return;
    };

    let embedSettings = get('verification.verificationMsg.embed');

    let embed = new Discord.MessageEmbed();

    if (embedSettings.title) embed.setTitle(embedSettings.title);
    if (embedSettings.description) embed.setDescription(embedSettings.description);
    if (embedSettings.footer) embed.setFooter(embedSettings.footer);
    if (embedSettings.timestamp) embed.setTimestamp();
    if (embedSettings.image) embed.setImage(embedSettings.image);
    if (embedSettings.thumbnail) embed.setThumbnail(embedSettings.thumbnail);
    if (embedSettings.color) embed.setColor(embedSettings.color);

    let isEmbedUsed = Object.entries(embed.toJSON()).map(x => ({ key: x[0], value: x[1] })).filter(x => ['fields', 'type', 'color'].some(y => x != y))
        .find(x => x.value != null) != null

    let msg = { content: get('verification.verificationMsg.content'), embed: isEmbedUsed ? embed : null };

    channel.send(msg).catch(err => {
        message.channel.send('Cannot send an empty message.')
    });
}


module.exports.info = {
    description: "Sends the verification embed.", // default is "None"
}