const Discord = require("discord.js");

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (bot, message, args) => {

    let questions = require('./trivia').questions;

    questions = questions[Math.floor(Math.random() * questions.length)];
    let iq = 0;

    const embed = new Discord.MessageEmbed()
        .setTitle(`${questions.category} Question: ${questions.title}`)
        .setDescription(
            questions.options.map(opt => {
                iq++;
                return `${iq} - ${opt}`;
            }).join('\n'))
        .setColor("BLUE")
        .setFooter(`Reply to this message with the correct qustion number! You have 15 seconds. WHAT ARE YOU WAITNG FOR! COME ON DO IT`)
    message.channel.send(embed)

    let msgs = await message.channel.awaitMessages((u2) => u2.author.id == message.author.id, {
        time: 15000,
        max: 1,
        errors: ["time"]
    }).catch(err => {
        message.channel.send('You did not answer you slow water slut!')
        return;
    });

    if (msgs == null) return;

    questions.correct = Array.isArray(questions.correct) ? questions.correct.map(x => x.toString()) : [questions.correct.toString()];

    if (questions.correct.includes(msgs.first().content)) {
        return message.channel.send('You got it correct!')
    } else {
        return message.channel.send('You got it incorrect. you dumbass.');
    }

}

module.exports.info = {
    description: "", // default is "None"
}