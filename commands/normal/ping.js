const discord = require('discord.js');
const Client = new discord.Client();
const cooldown = new Set();

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;
       
    if(cooldown.has(message.author.id)) {
        message.reply('Please wait 5 seconds between using the command, because you are on cooldown')
    } else {

        message.channel.send(`Finding the bot ping...`).then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`A bot pingje: **${ping}**ms!`)
        }) 

        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 5000); // here will be the time in miliseconds 5 seconds = 5000 miliseconds
    }

}

module.exports.help = {
    name: "ping",
    aliases: ['ms']
}