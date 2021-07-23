const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
    await message.channel.send('A **TICKETS** kategória sikeresen létrehozva! ✅ ').then(msg=>msg.delete({timeout: "3000"}))
    await message.author.send(`A **TICKETS** kategória sikeresen létrehozva! ✅ ${message.guild.name} `)
    setTimeout(function() {
        message.guild.channels.create("TICKETS", {
          type: "category"
        });
      }, 1000);

    
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}