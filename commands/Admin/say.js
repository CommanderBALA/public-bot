const Discord = require('discord.js');


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


        if(!message.member.hasPermission('MANAGE_MESSAGES')) return; 
    if (message.content.toLowerCase() === '--say'){
        let filter = m => m.author.id === message.author.id;
        let q1 = new Discord.MessageCollector(message.channel, filter, {
            max: 1
        })
        message.channel.send('Írd be melyik csatornára küldjem!');

        q1.on('collect', async (message, col) => {
            let channel = message.mentions.channels.first();

            message.channel.send('Mi legyen az üzenet?')
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, {
                max: 1
            })
            q2.on('collect', async (message, col) => {
                channel.send(message.content);
                await message.react('😀');
                message.channel.send(`Sikeres üzenetküldés! Nézd meg ezen a csatornán hogy végbement-e: ${channel}!`)
                q2.stop();
            })
        })
    }
}

module.exports.help = {
    name: "say",
    aliases: []
}