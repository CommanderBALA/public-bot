const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    message.channel.send(`${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} :green_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} :red_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} :yellow_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "invisible").size} :gray_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "offline").size} :white_circle:`);
}

module.exports.help = {
    name: "status",
    aliases: []
}