const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
if(!message.content.startsWith(prefix)) return;
if(!args[0]) return message.reply('Nem adtál meg kérdést!')
let id = '885389287259009036'
let csati = Client.channels.get(id)
let kérdés = args.join(" ")

let embed = new Discord.MessageEmbed()
.setTitle('Új kérdés érkezett')
.setDescription(kérdés)
.addField('Kérdező:', message.author);

await csati.send(embed)
}

module.exports.help = {
name: 'support',
aliases: []
}