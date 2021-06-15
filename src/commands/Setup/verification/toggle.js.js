const Discord = require("discord.js");
const { get, set } = require("../../../utils/settings");

const trueFalse = (val, def = null) => /^(y|yes|true)$/i.test(val) ? true : /^(n|no|false)$/i.test(val) ? false : def;

/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {String[]} args 
 */
module.exports.run = (bot, message, args) => {

    let toggle = (boolean = null) => {
        if (boolean == null) {
            boolean = !get('verification.enabled');
        }

        set('verification.enabled', boolean);
        message.channel.send({
            embed: new Discord.MessageEmbed().setTitle("Verification")
                .setColor("BLUE").setDescription(`Successfully set the verification \`enabled\` to: \`${boolean}\``)
        })
    }

    if (!args[0]) {
        toggle();
        return;
    }

    let boolean = trueFalse(args[0]);
    if (boolean == null) {
        toggle();
        return;
    }

    toggle(boolean);

}


module.exports.info = {
    description: "Toggles the verification modules.", // default is "None"
}