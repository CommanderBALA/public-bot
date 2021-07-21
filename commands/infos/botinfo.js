const discord = require('discord.js'); // requiring discord modules
const moment = require(`moment`) // requiring moment

module.exports.run = async (Client, message, args, prefix) => { // 4 my cmds handler
    if(!message.content.startsWith(prefix)) return; // check if the cmd start with the prefix

    var botEmbed = new discord.MessageEmbed() // creates a embed that we gonna call botEmbed
    .setColor(`RANDOM`) // will set the color for the embed
    .setTitle(`Bot's Info`) // make the title for the cmd
    .setThumbnail(Client.user.displayAvatarURL()) // it will put the bot avatar (pfp) in the embed
    .addField(`**Általános infók**`, [ // say general then...
        `**Felhasználónév:** ${Client.user.username}`, // this will be the username of the bot
        `**Tag:** ${Client.user.tag}`, // the actual name for the bot
        `**ID:** ${Client.user.id}`, // this will be the ID for the bot
        `**Létrehozás időpontja:** ${moment(Client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, // this will say when the bot is created 
        `**Tulajdonos:** C𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙧𝘽𝘼𝙇𝘼#0950`, // who created the bot
        '\u200b'
    ])
    .addField(`**Statisztikák**`,[ // it will say stats then...
        `**Szerverek:** ${Client.guilds.cache.size}`, // how many servers the bot is in
        `**Felhasználók:** ${Client.users.cache.size}`, // how many users the bot serve on
        `**Discord.js Verzió:** 12.5.3`, // the discord.js modules version
        `**Node.js Verzió:** 2.0.4` // node.js version
    ])
    message.channel.send(botEmbed) // it sends the embed
}
module.exports.help = { // 5 my cmds handler
    name: "botinfo", // name of the cmd
    aliases: ['bot', 'bot-info'] // another name for the bot
}