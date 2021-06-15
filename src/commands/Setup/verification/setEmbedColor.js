const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {
    let color = null;

    if (args[0] != null) {
        try {
            color = Discord.Util.resolveColor(args[0].toUpperCase()) || null;
        } catch (error) {
            message.channel.send(`${args[0]} is not a color dummy`);
            return;
        }
    }

    set('verification.verificationMsg.embed.color', color);

    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Verification")
            .setColor("BLUE").setDescription(`Successfully set the verification \`embed.color\` to: \`${args[0] || color}\``)
    })

}

module.exports.info = {
    description: "Set the color for the verification embed.", // default is "None"
}