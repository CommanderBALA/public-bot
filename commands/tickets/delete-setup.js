const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
    const log = message.member.guild.channels.cache.find(c => c.name == "ticket-log")
    const info = message.member.guild.channels.cache.find(c => c.name == "ticket-info")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs jogosultságod hogy setupold a ticket-et!').then(msg => msg.delete({timeout: "2000"}))
    message.delete();

if(!args[0]){
    message.reply('Ha szeretnéd hogy töröljem az összes Ticket -es csatornát írd be: -tsetup t igen')
}
if(args[0] === 'igen'){
        if(!categoryID && !van1 && !van2){
            var nemtalalt = new Discord.MessageEmbed()
            .setTitle('! PROBLÉMA !')
            .setDescription('Nem találtam **Ticket**-es csatornákat!')
            .setColor('RED')
            .setTimestamp()
            return message.channel.send(nemtalalt)
        }

        categoryID.delete();
        log.delete();
        info.delete();

        const eredmeny = new Discord.MessageEmbed();
        eredmeny.setTitle('Törlés sikeres!')
        eredmeny.setColor('GREEN')              
        eredmeny.addField('Sikeresen kitöröltem a ticket -es csatornákat!','✅')
        eredmeny.setTimestamp()
        message.channel.send(eredmeny);
    }
}

module.exports.help = {
    name: 'tsetuptörlés',
    aliases: ['ticketsetup']
}