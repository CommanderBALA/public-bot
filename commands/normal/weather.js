const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = async (Client, message, args, prefix) => {

    if(args[0]){

        weather.find({search: args.slice(0).join(" "), degreeType: args[0]}, function(err, result) {
            if(err) message.reply('Hiba a folyamat során! *Próbáld újra...*')

            if(!args[1]){

                let hibaembed = new Discord.MessageEmbed()
                .setTitle('❌ HIBA!!! ❌')
                .setColor('#d11717')
                .setDescription('Nincs megadva településnév!')
                .addField('Használd:', '-időjárás [F / C] [Település név]')
                .setFooter('Parancs: -időjárás')
                .setTimestamp()
                message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
                return;

            }

            let current = result[0].current;
            let location = result[0].location
            let ertek = '°C'

            if(args[0] === 'C'){
                ertek = '°C'
            }else if(args[0] === 'F'){
                ertek = '°F'
            } else {

                let hibaembed = new Discord.MessageEmbed()
                .setTitle('❌ HIBA!!! ❌')
                .setColor('#d11717')
                .setDescription('Nincs megadva hőmérsékleti skála!')
                .addField('Használd:', '-időjárás [F / C] [Település név]')
                .setFooter('Parancs: -időjárás')
                .setTimestamp()
                message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
                return;

            }

            let weatherEmbed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Időjárás itt: ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("GREEN")
            .addField("Időzóna:",`UTC${location.timezone}`,true)
            .addField("Fokozat típusa:", `${ertek}`, true)
            .addField('Hőfok:', `${current.temperature}${ertek}`, true)
            .addField('Hőérzet:',`${current.feelslike}${ertek}`, true)
            .addField('Szél:', `${current.winddisplay}`,true)
            .addField('Páratartalom:', `${current.humidity}%`, true)

            message.channel.send(weatherEmbed) 
        })

    }else{
            let hibaembed = new Discord.MessageEmbed()
            .setTitle('❌ HIBA!!! ❌')
            .setColor('#d11717')
            .setDescription('Nincs megadva hőmérsékleti skála és településnév!')
            .addField('Használd:', '-időjárás [F / C] [Település név]')
            .setFooter('Parancs: -időjárás')
            .setTimestamp()
            message.channel.send(hibaembed).then(m => m.delete({timeout: '5000'}));
            return;
        
    }

}

module.exports.help = {
    name: 'időjárás',
    aliases: []
}