const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!args[0]) return message.channel.send(`Kérlek adj meg egy emojit! (:punch:, :v:, :hand_splayed:) (**${prefix}kpo [emoji]**)`);
        let replies = [":hand_splayed:", ":v:", ":punch:"];
        let result = Math.floor(Math.random() * replies.length);
        let rps = args[0]
        let nyertes = 'senki' // Client.user / message.author
        let te = ' '
        let color = ' '

        if (replies[result]==':hand_splayed:'){
            if(rps=='kő'){
                nyertes = Client.user
            }
            if(rps=='papír'){
                nyertes = 'Döntetlen'
            }
            if(rps=='olló'){
                nyertes = message.author
            }
        }
        if (replies[result]==':v:'){
            if(rps=='kő'){
                nyertes = message.author
            }
            if(rps=='papír'){
                nyertes = Client.user
            }
            if(rps=='olló'){
                nyertes = 'Döntetlen'
            }
        }
        if (replies[result]==':punch:'){
            if(rps=='kő'){
                nyertes = 'Döntetlen'
            }
            if(rps=='papír'){
                nyertes = message.author
            }
            if(rps=='olló'){
                nyertes = Client.user
            }
        }
        if (args[0]=='kő'){
            te = ':punch:'
        }
        if (args[0]=='olló'){
            te = ':v:'
        }
        if (args[0]=='papír'){
            te = ':hand_splayed:'
        }

        if(nyertes === Client.user){
            color = 'RED'
        }
        if(nyertes === message.author){
            color = 'GREEN'
        }
        if(nyertes === 'Döntetlen'){
            color = 'GRAY'
        }


        let embed = new Discord.MessageEmbed()
          .setTitle("Kő - Papír - Olló")
          .setColor(color)
          .addField("Te:", te,false)
          .addField("Én:", replies[result],false)
          .addField('Nyertes:', nyertes)
          .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL())
          .setTimestamp();
        await message.channel.send(embed);
}
module.exports.help = {
    name: 'kpo',
    aliases: []
}