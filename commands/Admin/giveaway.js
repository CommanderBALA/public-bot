const discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return channel.reply("Nincs jogosultságod használni ezt a parancsot!");

    if(!args[0]) return message.channel.send(`**Használd: ${prefix}giveaway [időtartam] [nyertesek száma] [nyeremény megnevezése]**\n\n**Időtartamok:**\n*- s --- X másodperc*\n*- h --- X óra*\n*- d --- X nap*\n*- m --- X hét*\n**A betűk elé egy számot kell írni (pl: 100s) és csak egy érték adhatő meg:** vagy *másodperc* vagy *óra* vagy *nap* vagy *hét*!`)
    
    if(!args[0].endsWith("s")&&!args[0].endsWith("h")&&!args[0].endsWith("d")&&!args[0].endsWith("m")) return message.channel.send(`**How long does the giveaway need to be?**`)
    
    if(isNaN(args[0][0])) return message.channel.send(`**Mennyi ideig tartson a nyereményjáték?**`)

    let winnerCount = args[1]
    
    let prize = args.slice(2).join(" ")
    
    if(!args[1]) return message.channel.send(`**Nem adtad meg a nyertesek szánát és a nyereményt!**`)
    
    if(!args[2]) return message.channel.send(`**Nem adtad meg a nyereményt!**`)
    
    message.delete()
    
    var botEmbed = new discord.MessageEmbed()
     .setTitle("🎉 **Nyereményjáték** 🎉")
     .setDescription(`Reagálj a 🎉 -val hogy jelentkezz a játékra!

     **Nyeremény: **${prize}
     **Nyertesek száma: **${winnerCount}
     **Nyereményjáték hossza: **${args[0]}
     **Indító **${message.author}`)
     .setTimestamp(`${Date.now()+ms(args[0])}`)
     .setAuthor('Lejárat: ')
     .setColor("#d98a23")
     
    var msg = await message.channel.send(botEmbed)
    
    msg.react('🎉')

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;
    
        var peopleReacted = msg.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if(peopleReacted[i].id == Client.user.id){
                peopleReacted.splice(i,1);
                continue;
            }
        }

        if(peopleReacted.length == 0) {
            var non = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setTitle("🎉 **VÉGE A NYEREMÉNYJÁTÉKNAK!** 🎉")
             .setDescription(`Nincs nyertes! :(
             
              **Indító: **${message.author}`)
            msg.edit(non)

            return message.channel.send(`Senki nem jelentkezett a nyereményjátékra :( ! :(\n${msg.url}`)
        }

        if(peopleReacted.length < winnerCount) {
            var non = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setTitle("🎉 **VÉGE A NYEREMÉNYJÁTÉKNAK!** 🎉")
             .setDescription(`Nem jelentkezett elég ember!
             
              **Indító: **${message.author}`)
            msg.edit(non)

            return message.channel.send(`Kevesebb a jelentkező mint a nyertesek száma! :(\n${msg.url}`)
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if(winners[o] == peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }
            }

            if(!inList){
                winners.push(peopleReacted[random]);
            }
        }

        var response = ``

        for (let y = 0; y < winners.length; y++) {

            response += `${winners[y]}\n`
               
            var embed = new discord.MessageEmbed()
             .setColor("#d98a23")
             .setTitle("🎉 **VÉGE A NYEREMÉNYJÁTÉKNAK!** 🎉")
             .setDescription(`---------------------------------

             **${prize}**

             **Nyertes(ek):**
             ${response}
             **A nyereményjátékot indító: ** ${message.author}`)
            msg.edit(embed)
    
            message.channel.send(`**Gratulálunk:**\n${response}Megnyerted a... **${prize} -t!**.\n${msg.url}`)
        }
        
    }, ms(args[0]));
}

module.exports.help = {
    name: "giveaway",
    aliases: ["g-start", 'giveaway-start', "gw"]
}