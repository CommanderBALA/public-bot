const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    let ötletcsati = message.member.guild.channels.cache.find(c => c.name === 'hiba')
    let ötlet = args.slice(" ")
    
    if(!ötletcsati) return message.reply('A szerveren nincsen hiba system!')
    if(!args[0]) return message.reply('Nem adtál meg hibát!')
    let ötletEmbed = new Discord.MessageEmbed()
        .setTitle('Új hibajelentés!')
        .setDescription(`**Hiba:**\n${ötlet}\n\n**Küldő:**${message.author}`)
        .setTimestamp()
        .setFooter('Beküldés időpontja')
    await ötletcsati.send(ötletEmbed)
}

module.exports.help = {
name: 'hiba',
aliases: []
}