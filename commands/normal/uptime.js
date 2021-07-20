const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor("RANDOM")
      .setTitle(`Online`)
      .addField(`Nap:`, `${days}`, true)
      .addField(`Óra:`, hours, true)
      .addField(`Perc:`, minutes, true)
      .addField(`Másodperc:`, seconds, true)
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL())
      .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: 'uptime',
    aliases: []
}


