const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKET")
    const logcsatorna = message.member.guild.channels.cache.find(c => c.name == "ticket-log")

    var userName = message.author.username;
    
    if(!categoryID) return;

    if(message.channel.parentID == categoryID){
    
        message.channel.delete();

        if(!logcsatorna) return;

        var logEmbed = new discord.MessageEmbed()
        .setTitle('Ticket zárás!')
        .setColor('RED')
        .setDescription(userName + '  Bezárta a Ticketét!')
        .setTimestamp()
        logcsatorna.send(logEmbed);
    
    } else {
        return;
    }
}
module.exports.help = {
    name: "close",
    aliases: []
}