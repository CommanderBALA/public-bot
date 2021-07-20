const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
    message.delete();
    message.channel.send({
        files: [
          "https://media.discordapp.net/attachments/718871359102517279/727633735981334638/720650612747796499.gif",
          "https://media.discordapp.net/attachments/718871359102517279/727633736858075166/720650690434957364-1.gif"
        ]
      });
}

module.exports.help = {
    name: 'xd',
    aliases: []
}