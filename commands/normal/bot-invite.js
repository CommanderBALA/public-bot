const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=792692203180654592&permissions=8&scope=bot')
}

module.exports.help = {
    name: 'botinvite',
    aliases: ['botinv']
}