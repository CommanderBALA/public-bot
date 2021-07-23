const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
const embed = new Discord.MessageEmbed;
      let sum = Math.floor(Math.random() *2) + 1;

      let szám1 = Math.floor(Math.random() *9) + 1;
      let szám2 = Math.floor(Math.random() *9) + 1;
      let szám3 = Math.floor(Math.random() *9) + 1;
      let szám4 = Math.floor(Math.random() *9) + 1;
      let szám5 = Math.floor(Math.random() *9) + 1;
  
      embed.setAuthor(`Közösségi Képviselő - Szerencsejáték`)
      embed.setTitle('SZERENCSEJÁTÉK')
  
      embed.setColor("#8B9EB5");
      embed.addField("Szerencsejáték", "A kipörgetett számod: " +sum);
  
      if(sum == 1){
        embed.addField("Gratulálunk! Kipörgetted a nyarő számot!!!");
        message.author.send(`Itt a kód amit be tudsz váltani: ${szám1}${szám2}${szám3}${szám4}${szám5}`, )
        let csatorna = "868189061859393567"
        let nyszám = new Discord.MessageEmbed()
        .setTitle(`Új nyerő kód készült: ${szám1},${szám2}${szám3}${szám4}${szám5}`)
        .setTimestamp();
        csatorna.send(nyszám)
    } else { 
        embed.addField("Sajnos nem sikerült :(", "Próbáld újra...");
        }
  
      embed.setTimestamp();
      embed.setFooter("Közösségi Képviselő")
  
      message.channel.send(embed);
}

module.exports.help = {
    name: 'szerencsejáték',
    aliases: ['szjáték', 'szerencsej']
}