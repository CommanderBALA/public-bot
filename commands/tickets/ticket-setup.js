const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) =>{
    setTimeout(function() {
        message.guild.channels.create("TICKET", {
          type: "category"
        });
      }, 1000);
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}