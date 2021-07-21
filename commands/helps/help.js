const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

        let helpembed = new Discord.MessageEmbed()
        .setTitle('SEGÍTSÉG')
        .setColor("BLUE")
        .addField('Helpek','ezeken találhatóak a bot commandjai')
        .addFields({
            name: "-help",
            value: 'Általános commandok',
            inline: true
        },
        {
            name: "-modhelp",
            value: 'Moderátor parancs segítségek',
            inline: true
        })
        .addField('-----\nBotinfók', 'infók a botról minden mennyiségben')
        .addFields({
            name: "-ping",
            value: 'A bot pingje',
            inline: true
        },
        {
            name: "-prefix",
            value: "A bot prefixe",
            inline: true
        },
        {
            name: "-uptime",
            value: 'megmutatja mióta van online a bot',
            inline: true,        
        },
        {
            name: '-botinfó',
            value: 'általános infók a botról',
            inline: true
        })
        .addField('-----\nEgyéb command', 'minden is!')
        .addFields({
            name: '-covid [all/ország neve]',
            value: 'megmutatja az összesített covid adatokat',
            inline: true
        },
        {
            name: '-ticket',
            value: 'segítségkérő csatorna készítése',
            inline: true
        },
        {
            name: '-status',
            value: 'megmutatja a szerveren lévő emberek/botok státuszát',
            inline: true
        },
        {
            name: '-serverstat',
            value: 'általános információk a szerverről',
            inline: true
        })
        .addField('-----\nFun parancsok', 'minden ami vicces XD')
        .addFields({
            name: '-xd',
            value: 'csak írd be XDDD',
            inline: true
        })
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(helpembed);
}

module.exports.help = {
    name: 'help',
    aliases: ['segítség']
}