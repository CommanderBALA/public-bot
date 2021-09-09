const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    let a = ':green_apple:'
    let b = ':apple:'
    let c = ':tangerine:'
    let d = ':watermelon:'
    let e = ':cherries:'
    let f = ':strawberry:'
    let g = ':eggplant:'
    let h = ':tomato:'
    let i = ':pineapple:'
    let j = ':grapes:'
    let cuccok = [a,b,c,d,e,f,g,h,i,j]

    let képek = cuccok
    let képek1 = cuccok
    let képek2 = cuccok
    let eredmeny = képek[Math.floor(Math.random()* képek.length)];
    let eredmeny1 = képek1[Math.floor(Math.random()* képek1.length)];
    let eredmeny2 = képek2[Math.floor(Math.random()* képek2.length)];
    let er = ' '

    if(eredmeny===eredmeny1 && eredmeny1===eredmeny2){
        er = 'Eltaláltad az összeset!'

    } else if (eredmeny===eredmeny1 || eredmeny===eredmeny2 || eredmeny1===eredmeny2) {
        er = 'Egy párt eltaláltál!'
    
    } else {
        er = 'Egyet sem találtál el!'
    }

    let slotEmbed = new Discord.MessageEmbed()
    .setAuthor('Slot Machine')
    .setTitle(`==========\n| ${eredmeny} | ${eredmeny1} | ${eredmeny2} |\n==========`)
    .setDescription(er)
    .setTimestamp();

    await message.channel.send(slotEmbed);


}

module.exports.help = {
name: 'slot',
aliases: []
}