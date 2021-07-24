const Discord = require('discord.js');
const api = require('covidapi')
const fetch = require('node-fetch');


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


        let countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Helytelen parancs használat!')
        .setColor(0xFF0000)
        .setDescription('Használd: **-covid all** vagy **-covid [ország név angolul]**')
        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Meggyógyultak: ', confirmed)
                .addField('Meggyógyultak: ', recovered)
                .addField('Halálok: ', deaths)

                message.channel.send(embed)
            })

        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Meggyógyultak: ', confirmed)
                .addField('Meggyógyultak: ', recovered)
                .addField('Halálok: ', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Érvénytelen országnév!')
            })
        }
    }

    


module.exports.help = {
    name: `covid`,
    aliases: ['corona', 'coronavirus']
};