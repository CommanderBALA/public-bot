const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) => {

    
    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`hello my brother`)
}

module.exports.help = {
    name: 'hello',
    aliases: ["hi", "hey"]
};