const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let description = args[0] == null ? null : args.join(' ');

    set('verification.verificationMsg.embed.description', description);

    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Verification")
            .setColor("BLUE").setDescription(`Successfully set the verification \`embed.description\` to: \`${description}\``)
    })

}

module.exports.info = {
    description: "Set the description for the verification embed.", // default is "None"
}