const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    let rang = message.guild.roles.cache.find(r => r.name === 'Rab')
    let rang2 = message.guild.roles.cache.find(r => r.name === 'Őr')
    let csatorna = message.member.guild.channels.cache.find(c => c.name === 'Bíróság' && c.type === 'text')
    let csatorna2 = message.member.guild.channels.cache.find(c => c.name === 'Börtön-társalgó' && c.type === 'text')
    let kategória = message.member.guild.channels.cache.find(c => c.name === 'Börtön' && c.type === 'category')

    //if(!rang || !rang2 || !csatorna || !csatorna2 || !kategória) return
    if(!args[0]) return
    //if(!indok || !kérelem) return

////////////////////////////////////////////////// S E T U P - P A R A N C S //////////////////////////////////////////////////////////

    if(!message.member.roles.cache.find(c=>c.name === 'Őr')) return message.reply('Nem vagy börtönőr!')

    if (args[0] === 'lt'){     
        let meniton = message.guild.member(message.mentions.users.first());
        if(meniton.roles.cache.find(c=>c.name === 'Rab')) return message.reply(`**${meniton.tag.user.tag}** már le van tartóztatva!`)
        let indok = args.slice(2).join(" ")
        let letartóztató = message.author
        let embed = new Discord.MessageEmbed()
        .setTitle('🔗 Új letartóztatás! 🔗')
        .addField('🤵 Letartóztatott:', meniton)
        .addField('📋 Indok:', indok)
        .addField('👮 Letartóztatást elrendelő:', letartóztató)
        .setFooter('⌚ Letartóztatás időpontja')
        .setTimestamp()
        .setColor("RED")
     
        await message.channel.send(embed)
        await meniton.roles.add(rang)
    }

    if (args[0] === 'el'){
        let meniton = message.guild.member(message.mentions.users.first());
        if(!meniton.roles.cache.find(c=>c.name === 'Rab')) return message.reply(`**${meniton.user.tag}** nem volt letartóztatva!`)
        let letartóztató = message.author
        let embed = new Discord.MessageEmbed()
        .setTitle('🔗 Új elengedés! 🔗')
        .addField('🤵 Elengedett:', meniton)
        .addField('👮 Elengedést elrendelő:', letartóztató)
        .setFooter('⌚ Elengedés időpontja')
        .setTimestamp()
        .setColor("LIME")
     
        await message.channel.send(embed)
        await meniton.roles.remove(rang)
    }

}

module.exports.help = {
name: 'b',
aliases: []
}