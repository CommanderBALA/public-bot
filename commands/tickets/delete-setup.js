const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
    const van1 = message.member.guild.channels.cache.find(c => c.name == "ticket-log")
    const van2 = message.member.guild.channels.cache.find(c => c.name == "ticket-info")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}))
    message.delete();

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

            if(van1){
                van1.delete();
                osszes += 1;

                if(van2){
                    van2.delete();
                    osszes += 1;
                }
                if(!van2){
                    eredmeny.addField('Nem találtam INFÓ csatornát (ticket-info)','Vagy nem volt ilyen csatorna vagy át lett nevezve');
                }
            } 

            if(!van1){
                eredmeny.addField('Nem találtam LOG csatornát (ticket-log)', 'Vagy nem volt ilyen csatorna vagy át lett nevezve!')
                
                if(van2){
                    van2.delete();
                    osszes += 1;
                }
                if(!van2){
                    eredmeny.addField('Nem találtam INFÓ csatornát (ticket-info)','Vagy nem volt ilyen csatorna vagy át lett nevezve');
                }
            }

        } 

        if(!categoryID){
            eredmeny.addField('Nem találtam TICKET kategóriát (TICKET)', 'Vagy nem volt ilyen kategória vagy át lett nevezve!')

            if(van1){
                van1.delete();
                osszes += 1;

                if(van2){
                    van2.delete();
                    osszes += 1;
                }

                if(!van2){
                    eredmeny.addField('Nem találtam INFÓ csatornát (ticket-info)','Vagy nem volt ilyen csatorna vagy át lett nevezve');
                }
            } 

            if(!van1){
                eredmeny.addField('Nem találtam LOG csatornát (ticket-log)', 'Vagy nem volt ilyen csatorna vagy át lett nevezve!')
                
                if(van2){
                    van2.delete();
                    osszes += 1;
                }

                if(!van2){
                    eredmeny.addField('Nem találtam INFÓ csatornát (ticket-info)','Vagy nem volt ilyen csatorna vagy át lett nevezve');
            
                }    
            }

        } 
       
        eredmeny.addField('Sikeresen kitöröltem a ticket -es csatornákat!','összesen 3/' + osszes + ' -t tudtam törölni!')
        eredmeny.setTimestamp()
        message.channel.send(eredmeny);
    }
}

module.exports.help = {
    name: 'tsetup',
    aliases: ['ticketsetup']
}