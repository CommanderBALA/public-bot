const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    let esés = ["Fej","Írás","Fej","Írás","Elveszett az érme :(","Fej","Írás","😀","📋","Fej","Írás","Egy madár elvitte az érmét :D","Fej","Írás","Fej","Írás"]
    let valasz = esés[Math.floor(Math.random()* esés.length)];

    let embed = new Discord.MessageEmbed()

    .setDescription(valasz)
    .setColor("GOLD")

    await message.channel.send(embed)
}

module.exports.help = {
name: 'pénzdob',
aliases: []
}