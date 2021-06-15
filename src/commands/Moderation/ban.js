const config = require(ROOT_PATH + '/config.json');
const Discord = require('discord.js')

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();

    let reason = args[1] == null ? "None" : args.slice(1).join(' ');

    if (user) {
        const member = message.guild.member(user);
        if (member) {

            member.ban({ reason }).then(() => {
                message.reply(`Successfully banned ${user.tag}`);
            }).catch(err => {
                message.reply('I was unable to ban the member');
                throw err;
            });
        } else {
            message.reply("That user isn't in this guild!");
        }
    } else {
        message.reply("You didn't mention the user to ban!");
    }

}

module.exports.info = {
    name: 'ban', // default = file name (without the extention)
    description: "Bans a user.", // default is "None"
    requiredPermission: "BAN_MEMBERS", // default is null
    aliases: [], // default is null
    usage: '<user> [reason]' // default is null
}