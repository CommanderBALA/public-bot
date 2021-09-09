const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Adminisztrátor\`)`);

if(!args[0]){
    return message.channel.send('Ha szeretnéd hogy a bot csináljon neked egy szervert írd be \` -szerverkészítés igen \`');
}

if(args[0] == 'igen'){
    message.guild.channels.cache.forEach(channel => channel.delete());

    let category1 = message.member.guild.channels.cache.find(c => c.name == "Információk")
    let category2 = message.member.guild.channels.cache.find(c => c.name == "Közösség")
    let category3 = message.member.guild.channels.cache.find(c => c.name == "Admin")
}

}

module.exports.help = {
    name: 'szerverkészítés',
    aliases: []
}