const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
    message.mentionedMember.user.displayAvatarURL({ dynamic: true});
}

module.exports.help = {
    name: 'avatar',
    aliases: []
}