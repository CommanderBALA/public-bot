const discord = require('discord.js');
const { arg } = require('mathjs');
const Client = new discord.Client();
const cooldown = new Set();

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Nincs hozzá jogosultságod!')
    if(!args[0]){
        message.reply('Nincs megadva új név!');
    }
       
    if(cooldown.has(message.author.id)) {
        message.reply('Várj 5 másodpercet hogy használhasd újra a parancsot!')
    } else {

        message.guild.setName(args[0])
        message.channel.send(`A szerver neve sikeresen megváltoztatva erre: **${args[0]}**`)

        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 5000); // here will be the time in miliseconds 5 seconds = 5000 miliseconds
    }

}

module.exports.help = {
    name: "szervernév",
    aliases: ['sznév']
}