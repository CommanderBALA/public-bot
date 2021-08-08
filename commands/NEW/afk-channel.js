const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!args[0]) return message.reply('Használd: -setAFK [hangcsatorna neve]')
    let afkcsatorna = message.member.guild.channels.cache.find(c => c.name == args[0])
    if(afkcsatorna.type='text'||'category'||'news'||'store') return message.reply('Hangcsatornának a nevét add meg!')
    message.guild.setAFKChannel(afkcsatorna)
    message.channel.send(`AFK csatorna sikeresen beállítva: ${afkcsatorna} ! Az AFK időkorlát **5 perc**`)


}

module.exports.help = {
    name: "setAFK",
    aliases: ['setafk']
}