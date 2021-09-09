const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
if(!message.content.startsWith(prefix)) return;
let replies = ["Pozitív", "Negatív"];
let result = Math.floor(Math.random() * replies.length);
let meniton = message.guild.member(message.mentions.users.first());
let vírus = args.slice(1).join(" ")
let kep = " "
let javaslat = ["Maradjon otthon!","Vonuljon karanténba!", "Ne menjen emberek közé!", "Lehet hogy a vírus fertőző! - Hordjon maszkot!!!", "Azonnal hívja az orvosát!"]
let javas = Math.floor(Math.random() * javaslat.length);
let igen = false

if(replies[result]=== 'Pozitív'){
    kep = 'https://cdn.discordapp.com/attachments/777225873504862209/885211805817917460/lkeskinen180400545.png'
    igen = true
    
} else {
    kep = 'https://cdn.discordapp.com/attachments/777225873504862209/885211335506407464/negative-007.png'
    igen = false
}

let embed = new Discord.MessageEmbed()
.setTitle(`${vírus} teszt!`)
.addField(`Tesztelt személy:`, meniton)
.addField(`Eredmény`, replies[result])
.setFooter(`Tesztelés időponja`)
.setTimestamp()
.setThumbnail(kep)

if(igen === true){
    embed.addField(`Javaslat:`, javaslat[javas])
} 

await message.channel.send(embed)

igen = false

}

module.exports.help = {
name: 'teszt',
aliases: []
}