const Discord = require('discord.js');
const api = require('covidapi')
// install the covid package
const fetch = require('node-fetch');
// installing the package to the fetch links


module.exports.run = async (bot, message, args, prefix) => {

        let countries = args.join(" ");
        // the country = =covid country

 		// if there is no country provided it sends this embed
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Invalid Command Usage')
        .setColor('RED')
        .setDescription('Helytelen parancshasználat. Használd a **-covid all** vagy a **-covid** ***[országnév(angolul)]***')
		// sends the noArgs embed
        if(!args[0]) return message.channel.send(noArgs);


		
  		// if some1 typed =covid all it will send the worldwide covid cases
        if(args[0] === "all"){
          	// fetching the covid data
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
              	// gets the worldwide's covid data from the website
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                // making the covid embed with the world stats
                const embed = new Discord.MessageEmbed()
                .setTitle(`Covid-19 összesített adatok - *Egész világ* 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Haláleset: ', deaths)

                message.channel.send(embed)
            })


        // so if someone send =covid (country) not =covid all it will send this
        } else {
          	// fetching the data of all the countries
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              	// getting the data of the countries
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                // making a embed with the info of the country that you choosed
                const embed = new Discord.MessageEmbed()
                .setTitle(`Covid-19 összesített adatok - **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Haláleset: ', deaths)

                message.channel.send(embed)
            }).catch(e => {
                // if he can't find the country that u said it will send this message
                return message.channel.send('Nem találtam ilyen országot')
            })
        }
    }

    


module.exports.help = {
    name: `covid`,
    aliases: ['corona', 'coronavirus']
};