const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
    message.channel.send('***Hamarosan...***');

}

module.exports.help = {
    name: 'modhelp',
    aliases: []
}