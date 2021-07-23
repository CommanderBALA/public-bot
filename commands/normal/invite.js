const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    message.channel.send('***Hamarosan...***')
}

module.exports.help = {
    name: 'invite',
    aliases: []
}