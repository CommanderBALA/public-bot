const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    let ötletcsati = message.member.guild.channels.cache.find(c => c.name.endsWith === 'ötlet')
    let ötlet = args.slice(" ")

    if(!ötletcsati) return message.reply('A szerveren nincsen ötletek system!')
    if(!args[0]) return message.reply('Nem adtál meg ötletet!')

    let ötletEmbed = new Discord.MessageEmbed()

    .setTitle('Új ötlet!')
    .setDescription(`**Ötlet:**\n${ötlet}\n\n**Küldő:**${message.author}`)
    .setTimestamp()
    .setFooter('Beküldés időpontja')

    let ötletüzi = await ötletcsati.send(ötletEmbed)
    await ötletüzi.react('✅')
    await ötletüzi.react('❌')
    


}

module.exports.help = {
name: 'ötlet',
aliases: []
}