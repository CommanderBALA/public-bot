const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
    await message.channel.send('A **TICKET** kategória sikeresen létrehozva!').then(msg=>msg.delete({timeout: "2000"}))
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