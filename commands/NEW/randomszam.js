const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!args[0]) return message.reply('Használd: -randomsz [kisebb szám] [nagyobb szám]')
    if(!args[1]) return message.reply('Nincs megadva a második szám!')

const embed = new Discord.MessageEmbed();
    let sum1 = args[0]
    let sum2 = args[1] -= sum1
    let sum = Math.floor(Math.random() *sum2) + 1;
    let ssum = sum += sum1
  
    embed.setColor("#8B9EB5");
    embed.addField(`Random szám:", "A kisorsolt szám: **${ssum}**!`);
    embed.setTimestamp();
  
    message.channel.send(embed);
}

module.exports.help = {
    name: 'randomsz',
    aliases: ['randomszám']
}