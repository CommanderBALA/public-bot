const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) =>{
    message.delete();
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
                  .setTitle(`Köszöntelek a ticketben ${message.author.username}`)
                  .setDescription(`Írd ide üzenetedet vagy kérdésedet`)
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
                      var ticketEmbed = new discord.MessageEmbed()
                      .setTitle(`Ticket-log`)
                      .setDescription(`A bot ide fogja logolni a ticketek nyitását és zárását! Amennyiben nincs szükséged erre a csatornára nyugodtan törölheted.`)
                      .setColor("ORANGE")
                      .setTimestamp()
                      settedParent.send(ticketEmbed)
                      settedParent.send('**(@everyone)**')
                  })
            })                              
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}