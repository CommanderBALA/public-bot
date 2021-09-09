const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
   
   

    if (!args[0]){

        let hibaembed = new discord.MessageEmbed()
        .setTitle('❌ HIBA!!! ❌')
        .setColor('#d11717')
        .setDescription('Nincs megadva kérdés!')
        .addField('Használd:', '-igenem [Kérdés]')
        .setFooter('Parancs: -igenem')
        .setTimestamp()
        message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
        return;
    }

    let content = args.join(" ");

    let valaszEmbed = new discord.MessageEmbed()
    .setTitle('A bot válasza:')
    .setDescription(`A nagy kérdés: ${content}`)
    .addField('Válasz:', valaszad)
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(valaszEmbed); 
}

module.exports.help = {
    name: 'igenem',
    aliases: []
}