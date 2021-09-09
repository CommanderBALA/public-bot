const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
if(!message.content.startsWith(prefix)) return;
let meniton = message.mentions.users.first();
let warnszöveg = args.slice(1).join(" ");
let figyelmeztető = message.author;
let szerver = message.guild;

message.reply('Jelentés elküldve!').then(msg=>msg.delete({timeout: '2000'}))

meniton.send(`***Figyelmeztetve lettél!!!*** 
            \n\n**Szerver:** ${szerver} 
            \n**Figyelmeztető:** ${figyelmeztető} 
            \n**Indok:** `+warnszöveg + `**!**`
            )
}

module.exports.help = {
name: 'warn',
aliases: []
}