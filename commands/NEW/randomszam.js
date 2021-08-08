const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!args[0]) return message.reply('Használd: -randomsz [szám]')

const embed = new Discord.MessageEmbed();
    let sum1 = args[0]
    let sum = Math.floor(Math.random() *sum1) + 1;
  
    embed.setColor("#8B9EB5");
    embed.addField(`Random szám:`, `A kisorsolt szám: **${sum}**!`);
    embed.setTimestamp();
  
    message.channel.send(embed);
}

module.exports.help = {
    name: 'randomsz',
    aliases: ['randomszám']
}