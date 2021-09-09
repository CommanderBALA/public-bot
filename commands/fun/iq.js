const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    let iqszint = Math.floor(Math.random() * 200) +1;
    let iqs = args[0] || message.mentions.members.first() || message.member;
    let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`IQ szint mérő`)
        .setDescription(`**${iqs}** IQ szintje: **${iqszint}**`)
        .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL())
        .setTimestamp();

    if(iqszint === '200')embed.addField('Gratulálok!!!','Kétszáz IQ!!!');

    await message.channel.send(embed);
}

module.exports.help = {
name: 'iq',
aliases: []
}