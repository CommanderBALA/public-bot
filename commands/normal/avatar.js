const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
    message.channel.send(`${args[0].member.user.avatarURL()}`)

}

module.exports.help = {
    name: 'avatar',
    aliases: []
}

