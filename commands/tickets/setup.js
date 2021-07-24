const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => message.bulk)
    await message.channel.send('A **TICKETS** kategória sikeresen létrehozva! ✅ ').then(msg=>msg.delete({timeout: "3000"}))
    await message.author.send(`A **TICKETS** kategória sikeresen létrehozva! ✅ *(Szerver: {message.guild.name})* `)
    setTimeout(function() {
    
      message.guild.channels.create("TICKETS", {
       type: "category"
        });
      }, 1000);
      const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")
      
      message.guild.channels.create('Ticket-info', {type: 'text'}).then(
      (createdChannel) => {
          createdChannel.setParent(categoryID).then(
              (settedParent) => {
                  settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                      SEND_MESSAGES: false,
                      VIEW_CHANNEL: true
                  });
                  var ticketEmbed = new discord.MessageEmbed()
                  .setTitle(`TICKET-INFORMÁCIÓK`)
                  .setColor("RED")
                  .setDescription(`Ticketet csak abban az esetben nyiss ha szükségedd van rá. A felesleges ticket nyitását a vezetőség jutalmazza. Használjátok normálisan...`)
                  .addField('Ticket nyitás parancs:', `${prefix}ticket`)
                  .addField('Ticket zárás parancs:', `${prefix}close`)
                  .setTimestamp()
                  settedParent.send(ticketEmbed)
                  settedParent.send('**(@everyone)**')
              })
        })
        message.guild.channels.create("Ticket-log", {type: 'text'}).then(
          (createdChannel) => {
              createdChannel.setParent(categoryID).then(
                  (settedParent) => {
                      settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false
                      });
                      var ticketEmbed2 = new discord.MessageEmbed()
                      .setTitle(`Ticket-log`)
                      .setDescription(`A bot ide fogja logolni a ticketek nyitását és zárását! Amennyiben nincs szükséged erre a csatornára nyugodtan törölheted.`)
                      .setColor("ORANGE")
                      .setTimestamp()
                      settedParent.send(ticketEmbed2)
                      settedParent.send('**(@everyone)**')
                  })
            })                              
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}