const Discord = require("discord.js");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (bot, message, args) => {

    let questions = require('./trivia').questions;

    let categories = [...new Set(questions.map(x => x.category))];

    let embed = new Discord.MessageEmbed().setColor("RANDOM").setTitle("Trivia").setDescription("").setTimestamp();

    for (const category of categories) {
        let size = questions.filter(x => x.category.toLowerCase() == category.toLowerCase()).length
        embed.setDescription(embed.description + `\n**${category}:**  ${size}`)
    }

    message.channel.send({ embed })

}

module.exports.info = {
    description: "", // default is "None"
}