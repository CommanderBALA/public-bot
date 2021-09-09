const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(message.author.Client) return

if (args.length < 1) return message.channel.send(`<a:x_:736342460522823768> Kérlek adj megy egy szöveget, amire rákeressek! (**${prefix}google [szöveg]**)`);
if (!message.content.startsWith('--')) return
 const gooogleEmbed = new discord.MessageEmbed()
 .setTitle('Google keresésed eredménye:')
 .setColor("RANDOM")
 .setDescription('[' + args.toString().replace(/,/g, ' ') + '](https://www.google.com/search?hl=en_US&q=' + args.toString().replace(/,/g, '+') + ')')
 .setTimestamp()
 .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL());
 message.channel.send(gooogleEmbed);
}

module.exports.help = {
    name: 'keres',
    aliases: []
}