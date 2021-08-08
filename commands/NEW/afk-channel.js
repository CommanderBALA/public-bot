const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    let afkcsatorna = message.member.guild.channels.cache.find(c => c.name == args[0])
    message.guild.setAFKChannel(afkcsatorna)
    message.channel.send(`AFK csatorna sikeresen beállítva: ${afkcsatorna} ! Az AFK időkorlát **5 perc**`)


}

module.exports.help = {
    name: "setAFK",
    aliases: ['setafk']
}