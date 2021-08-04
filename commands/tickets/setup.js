const Discord = require('discord.js');



module.exports.run = async (bot, message, args, prefix) =>{
  const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
  const van1 = message.member.guild.channels.cache.find(c => c.name == "ticket-log")
  const van2 = message.member.guild.channels.cache.find(c => c.name == "ticket-info")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}));
  message.delete();


    if(!args[0]){
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

    if(args[0] === 'törlés'){
        message.reply('Ha szeretnéd hogy töröljem az összes Ticket -es csatornát írd be: -tsetup t igen')
    }

    if(args[0] === 't' && args[1] === 'igen'){
 
            if(!categoryID && !van1 && !van2){

                var nemtalalt = new Discord.MessageEmbed()
                .setTitle('! PROBLÉMA !')
                .setDescription('Nem találtam **Ticket**-es csatornákat!')
                .setColor('RED')
                .setTimestamp()
                return message.channel.send(nemtalalt)
            }

            const osszes = 0;
            const eredmeny = new Discord.MessageEmbed();
            eredmeny.setTitle('Törlés sikeres!')
            eredmeny.setColor('GREEN')

            if(categoryID){

                categoryID.delete();
                osszes += 1;

            } else if(!categoryID){

                eredmeny.addField('Nem találtam TICKET kategóriát (TICKET)', 'Vagy nem volt ilyen kategória vagy át lett nevezve!')
            }
            
            if(van1){

                van1.delete();
                osszes += 1;

            } else if(!van1){

                eredmeny.addField('Nem találtam LOG csatornát (ticket-log)', 'Vagy nem volt ilyen csatorna vagy át lett nevezve!')
            }
            
            if(van2){

                van2.delete();
                osszes += 1;

            } else if(!van2){

                eredmeny.addField('Nem találtam INFÓ csatornát (ticket-info)','Vagy nem volt ilyen csatorna vagy át lett nevezve!')
            }   
            
            eredmeny.addField('Sikeresen kitöröltem a ticket -es csatornákat!','összesen 3/' + osszes + ' -t tudtam törölni!')
            eredmeny.setTimestamp()

            message.channel.send(eredmeny);
        }
}

module.exports.help = {
    name: 'ticketsetup',
    aliases: ['tsetup']
}