const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Nincs hozzá jogosultságod!')
    if(!args[0]){
        message.reply('Nincs megadva emoji!');
    }
        message.channel.send(`Teszt szöveg`).then(msg => msg.react('🐻'))

    

}

module.exports.help = {
    name: "teszt",
    aliases: []
}