const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

    message.reply(` a jelenlegi prefixem a(z) **${prefix}** .`)
}

module.exports.help = {
    name: 'prefix',
    aliases: ['p', 'előjel']
}