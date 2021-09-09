const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    message.delete();

    if (!args[0]){
        let hibaembed = new discord.MessageEmbed()
        .setTitle('❌ HIBA!!! ❌')
        .setColor('#d11717')
        .setDescription('Nincs megadva hiba / bug!')
        .addField('Használd:', '-bothiba [hiba]')
        .setFooter('Parancs: -bothiba')
        .setTimestamp()
        message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
        return;
    }

    let hiba = args.join(" ");
    let hibacsatiID = '869086829209604136'
    let hibacsatorna = Client.channels.cache.find(c => c.id = `${hibacsatiID}`);
    let küldöping = message.author;
    let küldötag = message.author.tag;
    let küldöid = message.author.id;

    message.reply('A **Hibareportodat** elküldtem a **DEV** csapatnak! ⚠️\n**Köszönjük hogy jelenteddet!**').then(msg => msg.delete({timeout: '5000'}));

    let hibaEmbed = new discord.MessageEmbed()
    .setTitle('Új hibajelentés!!!')
    .setDescription(' ')
    .setColor('GREEN')
    .addField(`Bug / Hiba:`, hiba)
    .addField(`Beküldő:`, `Ping: ${küldöping}\nTag: ${küldötag}\nID: ${küldöid}`)
    .setFooter('Beküldés időpontja')
    .setTimestamp();

    hibacsatorna.send(hibaEmbed)
}

module.exports.help = {
    name: 'bhiba',
    aliases: ['bothiba']
}