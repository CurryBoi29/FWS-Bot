module.exports.run =  async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor('GREEN').setTitle('How to play')
        .setDescription(`\`${acceptedReplies.join(', ')}\` are the only valid arguments, anything else won\'t be accepted. \n \u200B \n To utilise this command run <rps rock|paper|scissors>`);

    const lose = new Discord.MessageEmbed()
        .setColor('RED').setTitle('You suck, I won! Better luck next time :P')

    const win = new Discord.MessageEmbed()
        .setColor('BLUE').setTitle('I lost. How can this be...')

    const tie = new Discord.MessageEmbed()
        .setColor('PURPLE').setTitle('It\'s a tie! We picked the same option.')

    const acceptedReplies = ['rock', 'paper', 'scissors'];
    const random = Math.floor((Math.random() * acceptedReplies.length));
    const result = acceptedReplies[random];

    const choice = args[0];
    if (!choice) return message.channel.send(embed);
    if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);

    if (result === choice) return message.reply(tie);

    switch (choice) {
        case 'rock': {
            if (result === 'paper') return message.reply(lose);
            else return message.reply(win);
        }
        case 'paper': {
            if (result === 'scissors') return message.reply(lose);
            else return message.reply(win);
        }
        case 'scissors': {
            if (result === 'rock') return message.reply(lose);
            else return message.reply(win);
        }
        default: {
            return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        }
    }
}

module.exports.info = {
    description: "Rock paper scissors. Does it need more a explanation?",// default is "None"
    requiredPermission: null,// default is null
    aliases: [], // default is null
    usage: '[command]' // default is null
}