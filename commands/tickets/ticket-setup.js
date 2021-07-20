const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
    setTimeout(function() {
        message.guild.channels.create("TICKET", {
          type: "category"
        });
      }, 1000);

    message.channel.send('A ticket kategória sikeresen létrehozva!').then(msg=>msg.delete({timeout: "1000"}))
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}