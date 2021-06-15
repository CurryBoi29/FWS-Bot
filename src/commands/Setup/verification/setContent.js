const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let content = args[0] == null ? null : args.join(' ');

    set('verification.verificationMsg.content', content);

    message.channel.send({
        embed: new Discord.MessageEmbed().setTitle("Verification")
            .setColor("BLUE").setDescription(`Successfully set the verification \`content\` to: \`${content}\``)
    })

}

module.exports.info = {
    description: "Set the content for the verification message.", // default is "None"
}