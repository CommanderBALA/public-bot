const Discord = require('discord.js');



module.exports.run = async (bot, message, args, prefix) =>{
  const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
  const van1 = message.member.guild.channels.cache.find(c => c.name == "ticket-log")
  const van2 = message.member.guild.channels.cache.find(c => c.name == "ticket-info")


    message.delete();
    if(!args[0]){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}));
    if(categoryID) return message.reply("Van már **TICKET** kategória!")
    await message.channel.send('A **TICKET** kategória sikeresen létrehozva! ✅ ').then(msg=>msg.delete({timeout: "3000"}))
    await message.author.send(`A **TICKET** kategória sikeresen létrehozva! ✅ *(Szerver: ${message.guild.name})* `)
    setTimeout(function() {
    
      message.guild.channels.create("TICKET", {
       type: "category"
        });
      }, 1000);
    }

    if(args[0] === "log"){
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}));
      if(van1) return message.reply('Van már log csatorna!')
      message.guild.channels.create('ticket-log', {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {
                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    var logEmbed = new Discord.MessageEmbed()
                    .setTitle(`Ticket-log`)
                    .setDescription(`A bot itt fogja logolni ha valaki nyit vagy zár egy ticketet. A csatorna nevét nem ajánlott megváltoztatni mert akkor nem fog működni :( )`)
                    .setTimestamp()
                    settedParent.send(logEmbed)
                    settedParent.send('**(@everyone)**')
                }
            ).catch(err => {
                return console.log(err)
            });
        }
    ).catch(err => {
        return console.log(err)
    });
}

    if(args[0] === "info"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}));
        if(van2) return message.reply('Van már infó csatorna!')
        message.guild.channels.create('ticket-info', {type: 'text'}).then(
          (createdChannel) => {
              createdChannel.setParent(categoryID).then(
                  (settedParent) => {
                      settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: true
                      });
                      var infoEmbed = new Discord.MessageEmbed()
                      .setTitle(`Ticket-Infó`)
                      .setColor('#099515')
                      .addField('-ticket','Ticket nyitása (egyszerre csak 1-et lehet)')
                      .addField('-close','Ticket bezárása')
                      .addField('Mit nem ajánlott?','Feleslegesen ticketet nyitogatni')
                      .setTimestamp()
                      settedParent.send(infoEmbed)
                      settedParent.send('**(@everyone)**')
                  }
              ).catch(err => {
                  return console.log(err)
              });
          }
      ).catch(err => {
          return console.log(err)
      });
    }
    
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}