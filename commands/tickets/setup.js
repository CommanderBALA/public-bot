const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
    if((!args[0])){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}));
    await message.channel.send('A **TICKET** kategória sikeresen létrehozva! ✅ ').then(msg=>msg.delete({timeout: "3000"}))
    await message.author.send(`A **TICKET** kategória sikeresen létrehozva! ✅ *(Szerver: ${message.guild.name})* `)
    setTimeout(function() {
    
      message.guild.channels.create("TICKET", {
       type: "category"
        });
      }, 1000);
    }

    if((args[0]) = 'log'){
      message.channel.send('XXDD')
    }

}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}