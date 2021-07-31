const discord = require('discord.js'); // connecting to discord.js modules
const ms = require('ms'); // requiring the ms package

module.exports.run = async (Client, message, args, prefix) => { // thats for my cmd handler

    if(!message.content.startsWith(prefix)) return; // it makes sure that your cmd starts with ur prefix

    // setting the perm that only peoplw with manage msgs can use this cmd, and it also sends that msg
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return channel.reply("You don't have permission to use this command!");

    // if no time said send this
    if(!args[0]) return message.channel.send(`**Használd: ${prefix}giveaway [időtartam] [nyertesek száma] [nyeremény megnevezése]**\n\n**Időtartamok:**\n*- s --- X másodperc*\n*- h --- X óra*\n*- d --- X nap*\n*- m --- X hét*\n**A betűk elé egy számot kell írni (pl: 100s) és csak egy érték adhatő meg:** vagy *másodperc* vagy *óra* vagy *nap* vagy *hét*!`)
    
    // =giveaway 1h 1 tshirt / if the time doesn't end with h /s /d /m  send this 
    if(!args[0].endsWith("s")&&!args[0].endsWith("h")&&!args[0].endsWith("d")&&!args[0].endsWith("m")) return message.channel.send(`**How long does the giveaway need to be?**`)
    
    // if the time said isnt a number
    if(isNaN(args[0][0])) return message.channel.send(`**Mennyi ideig tartson a nyereményjáték?**`)

    // winner count 
    let winnerCount = args[1]
    
    // getting the whole prize
    let prize = args.slice(2).join(" ")
    
    // if no amount of winner said
    if(!args[1]) return message.channel.send(`**Hány nyertes legyen?**`)
    
    // if no prize said
    if(!args[2]) return message.channel.send(`**Mi legyen a nyeremény?**`)
    
    // deleting the msg u send then...
    message.delete()
    
    // creating the giveaway embed
    var botEmbed = new discord.MessageEmbed()
     .setTitle("🎉 **GIVEAWAY** 🎉")
     .setDescription(`React with 🎉 to enter!

     **Giveaway Prize: **${prize}
     **Giveaway Winners: **${winnerCount}
     **Giveaway Ends: **${args[0]}
     **Giveaway Hosted By: **${message.author}`)
     .setTimestamp(`${Date.now()+ms(args[0])}`)
     .setAuthor('Lejárat: ')
     .setColor("#d98a23")
     
    // sending the giveaway embed
    var msg = await message.channel.send(botEmbed)
    
    // the bot with that emoji once it sends the embed
    msg.react('🎉')

    // setting the timeout of the giveaway
    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;
    
        // getting all people who reacted
        var peopleReacted = msg.reactions.cache.get("🎉").users.cache.array();

        // removing the bot from reaction
        for (let i = 0; i < peopleReacted.length; i++) {

            if(peopleReacted[i].id == Client.user.id){
                peopleReacted.splice(i,1);
                continue;
            }
        }

        // if no people entered the giveaway send this
        if(peopleReacted.length == 0) {
            var non = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setTitle("🎉 **GIVEAWAY ENDS** 🎉")
             .setDescription(`There are no winners, because no one participated!
             
              **Giveaway Hosted By: **${message.author}`)
            msg.edit(non)

            return message.channel.send(`There are no winners, because no one practicipated! :(\n${msg.url}`)
        }

        // if the winner count is higher then the members who joined the giveaway
        if(peopleReacted.length < winnerCount) {
            var non = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setTitle("🎉 **GIVEAWAY ENDS** 🎉")
             .setDescription(`There are no winners, because no one participated!
             
              **Giveaway Hosted By: **${message.author}`)
            msg.edit(non)

            return message.channel.send(`There are no winners, because no one practicipated! :(\n${msg.url}`)
        }

        // choosing someone randomly 
        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            // if this person already return
            for (let o = 0; o < winners.length; o++) {

                if(winners[o] == peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }
            }


            // if not, list him in the winners
            if(!inList){
                winners.push(peopleReacted[random]);
            }
        }

        // getting the winner respond
        var response = ``

        // getting all the winners
        for (let y = 0; y < winners.length; y++) {

            // setting the winners in the embed
            response += `${winners[y]}\n`
               
            // creating the winner embed
            var embed = new discord.MessageEmbed()
             .setColor("#d98a23")
             .setTitle("🎉 **VÉGE A NYEREMÉNYJÁTÉKNAK!** 🎉")
             .setDescription(`---------------------------------

             **${prize}**

             **Nyertes(ek):**
             ${response}
             **A nyereményjátékot indító: ** ${message.author}`)
            msg.edit(embed) // it will edit the embed 
    
            message.channel.send(`**Gratulálunk:**\n${response}Megnyerted a... **${prize}**.\n${msg.url}`) // send a msg with the winner people
        }
        
        // setting the giveaway time
    }, ms(args[0]));
}

module.exports.help = {
    name: "giveaway",
    aliases: ["g-start", 'giveaway-start']
}