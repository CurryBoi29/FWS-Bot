const Discord = require('discord.js')

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (bot, message, args) => {

    message.delete();

    let toDelete = parseInt(args[0]);

    if (isNaN(toDelete)) {
        message.channel.send(`${args[0]} is not a number dummy.`);
        return;
    }

    if (toDelete > 100) {
        message.reply('Please pick a number between 1-100! you fatty <3');
        return;
    }

    message.channel.bulkDelete(toDelete);
}

module.exports.info = {
    name: 'clear', // default = file name (without the extention)
    description: "Clears messages", // default is "None"
    requiredPermission: "MANAGE_MESSAGES", // default is null
    aliases: [], // default is null
    usage: '[number]' // default is null
}
