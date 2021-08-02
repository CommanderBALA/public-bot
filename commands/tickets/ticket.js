const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;
    message.delete();

    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
    const logcsatorna = message.member.guild.channels.cache.find(c => c.name == "ticket-log")

    if(!categoryID) return message.channel.send('Nem találok TICKET -nevű kategóriát :( ')

    var userName = message.author.username;
    
    var userDiscriminator = message.author.discriminator;

    var ticketexist = false;

    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
        
            ticketexist = true;

            return;
        }
    });

    if(ticketexist) return;

    if(logcsatorna){
        var logEmbed = new discord.MessageEmbed()
    .setTitle('Ticket nyitás!')
    .setColor('GREEN')
    .setDescription(userName + '  Ticketet nyitott!')
    .setTimestamp()
    logcsatorna.send(logEmbed);
    }

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {
                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id,{
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var ticketEmbed = new discord.MessageEmbed()
                    .setTitle(`Köszöntelek a ticketben ${message.author.username}`)
                    .setDescription(`Írd ide üzenetedet vagy kérdésedet`)
                    .setTimestamp()
                    settedParent.send(ticketEmbed)
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

module.exports.help = {
    name: "ticket",
    aliases: []
}

