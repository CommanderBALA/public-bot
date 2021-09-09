const Discord = require('discord.js');
const figlet = require("figlet");

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Nem teheted ezt!').then(msg => msg.delete({timeout: "2000"}));
    let szöveg = args.join(" ")
    if(!szöveg) {
        message.delete();
        return message.channel.send(`Kérlek add meg a szöveget, amit a bot kiírjon! (**${prefix}ascii [szöveg]**)`).then(msg => msg.delete(5000));
    }

    figlet(szöveg, function(err, data) {
        if (err) return console.dir(err);
        message.delete();

        if(data.length > 580) return message.channel.send('Rövidebb szöveget adj meg!')

        message.channel.send(data, {
            code: 'md'
        });
    });
}

module.exports.help = {
name: 'ascii',
aliases: []
}