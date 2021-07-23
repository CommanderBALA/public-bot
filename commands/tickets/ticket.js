const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")

    if(!categoryID) return;

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
                    .setTitle(`Köszöntelek a ticketben ${message.author.username}, **(@everyone)**`)
                    .setDescription(`Írd ide üzenetedet vagy kérdésedet`)
                    .setTimestamp()
                    settedParent.send(ticketEmbed)
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

