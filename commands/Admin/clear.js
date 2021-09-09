const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    message.delete();
    
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply('Nem törölhetsz üzeneteket!').then(msg => msg.delete({timeout: "2000"}));
if (!args[0]) {
     return message.reply(`Adj meg egy számot 1 és 100 között!`)
 }
 
 let deleteAmount;
 
 if (parseInt(args[0]) > 100 ) {
     deleteAmount = 100;

 } else {

     if(isNaN(args[0])) return message.channel.send('Számot írj!')
    
     deleteAmount = parseInt(args[0]);
 }
 
 await message.channel.bulkDelete(deleteAmount, true);

 await message.reply(`**Sikeresen** kitöröltem **${deleteAmount}** üzenetet.`).then(msg => msg.delete({timeout: "2000"}))
 }
 



module.exports.help = {
    name: `clear`,
    aliases: ['purge']
};
