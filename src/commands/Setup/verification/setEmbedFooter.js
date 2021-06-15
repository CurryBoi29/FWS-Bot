const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let footer = args[0] == null ? null : args.join(' ');

    set('verification.verificationMsg.embed.footer', footer);

    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Verification")
            .setColor("BLUE").setDescription(`Successfully set the verification \`embed.footer\` to: \`${footer}\``)
    })

}

module.exports.info = {
    description: "Set the footer for the verification embed.", // default is "None"
}