const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

    message.channel.send('Ezen a linken keresztül tudsz behívni a **szerveredre**: '+'https://discord.com/api/oauth2/authorize?client_id=792692203180654592&permissions=8&scope=bot'+' ,megköszönném ha megtennéd!')
}

module.exports.help = {
    name: 'botinvite',
    aliases: ['botinv']
}