const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
        
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply('Nem kezdeményezhetsz szavazást!').then(msg => msg.delete({timeout: "2000"}));

    let pollChannel = message.mentions.channels.first()
    if(!pollChannel) return message.channel.send('Használd: **-szavazás [#csatorna] [szöveg]**'); 
    let polldescription = args.slice(1).join(' ');
    if (!polldescription) return message.channel.send('Adj meg szöveget is...') 
    let embedPoll = new discord.MessageEmbed()
    .setTitle('😮 Új szavazás! 😮 ')
    .setDescription(polldescription)
    .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('✅')
    await msgEmbed.react('❌')

}

module.exports.help = {
    name: "szavazás",
    aliases: []
}
