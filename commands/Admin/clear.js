const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
     if(!message.content.startsWith(prefix)) return;

     // check if the person has perm.
     if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply('Nem törölhetsz üzeneteket!').then(msg => msg.delete({timeout: "2000"}));
    message.delete();
 // if he didnt say how much msgs he wanna delete (e.g. =clear )
 if (!args[0]) {
     return message.reply(`Adj meg egy számot 1 és 100 között!`) // of he didnt provide a number to delete send this
 }
 
 // defining the delete amount
 let deleteAmount;
 
 // if the args is higher then 100 set the deleted amount to 100, because you can't delete more then 100 per time
 if (parseInt(args[0]) > 100 ) {
     deleteAmount = 100;


 } else {


    // (e.g. =clear blala ) if someone didn't say a number to delete it will send this!
     if(isNaN(args[0])) return message.channel.send('Számot írj!')
    
     // else if the args is not higher then 100 just set the deleted msgs to args 
     deleteAmount = parseInt(args[0]);
 }
 
 // deleteing the total msgs (the amount you want) from the channel
 message.channel.bulkDelete(deleteAmount, true);

 // sends a msg when the msgs are deleted
 message.reply(`**Sikeresen** kitöröltem **${deleteAmount}** üzenetet.`)
 }
 



module.exports.help = {
    name: `clear`,
    aliases: ['purge'] // if someone typed (e.g. =purge 10 or =delete 10) it will do the same as =clear
};
