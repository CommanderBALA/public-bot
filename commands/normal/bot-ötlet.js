const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    message.delete();

    if (!args[0]){
        let hibaembed = new discord.MessageEmbed()
        .setTitle('❌ HIBA!!! ❌')
        .setColor('#d11717')
        .setDescription('Nincs megadva ötlet!')
        .addField('Használd:','-botötlet [ötlet]')
        .setFooter('Parancs: -botötlet')
        .setTimestamp()

        message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
        return;
    }

    let ötlet = args.join(" ");
    let ötletcsatiID = '869086780773781544'
    let ötletcsatorna = Client.channels.cache.find(c => c.id = `${ötletcsatiID}`);
    let küldö = message.author.tag;

    message.reply('Az **Ötletedet** elküldtem a **Support Szerverre**!\nItt tudsz belépni a szerverre: https://discord.com/invite/44VAMDfpHY !\n**Köszönjük hogy segítesz minket!**').then(msg => msg.delete({timeout: '10000'}));

    let ötletEmbed = new discord.MessageEmbed()
    .setTitle('Új ötlet érkezett!!!')
    .setDescription(' ')
    .setColor('GREEN')
    .addField(`Ötlet:`, ötlet)
    .addField(`Ötlet beküldő:`, küldö)
    .addField('Vélemény:','Ha jó az ötlet: ✅, Ha nem tetszik: ❌, Ha volt már ilyen ötlet: ⚠️')
    .setFooter('Beküldés időpontja')
    .setTimestamp();

    
    let ötletEmb = await ötletcsatorna.send(ötletEmbed);
    await ötletEmb.react('✅');
    await ötletEmb.react('❌');
    await ötletEmb.react('⚠️');
}

module.exports.help = {
    name: 'bötlet',
    aliases: ['botötlet']
}