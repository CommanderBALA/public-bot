const discord = require('discord.js');
const moment = require(`moment`)

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    var botEmbed = new discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`Bot infók`)
    .setThumbnail(Client.user.displayAvatarURL())
    .addField(`**Információk:**`, [
        `**Felhasználónév:** ${Client.user.username}`, 
        `**Tag:** ${Client.user.tag}`,
        `**ID:** ${Client.user.id}`,
        `**Bot készítése:** ${moment(Client.user.createdAt).format("YYYY-MM-DD [**-**] HH:mm")}`,
        `**Tulajdonos:** C𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙧𝘽𝘼𝙇𝘼#0950`, 
        '\u200b'
    ])
    .addField(`**Statisztikák:**`,[
        `**Szerverek:** ${Client.guilds.cache.size}`,
        `**Felhasználók:** ${Client.users.cache.size}`,
        `**Discord.js Verzió:** 12.5.1`,
        `**Node.js Verzió:** 14.15.1`
    ])
    message.channel.send(botEmbed)
}
module.exports.help = {
    name: "botinfo",
    aliases: ['bot', 'bot-info'] 
}