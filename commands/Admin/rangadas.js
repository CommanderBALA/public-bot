const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Nincs jogosultságom!")
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Nincs jogosultságod!`)
    let felh = message.guild.member(message.mentions.users.first());
    if(!felh) return message.channel.send(``)
    let args1 = message.content.split(" ").slice(2);
    if(!args1) return message.channel.send(`Nem jelöltél meg rangot! (**${prefix}addrole [@név] [@rang])**`);
    let rolename = message.mentions.roles.first();
    if(!rolename) return message.channel.send('Nem létezik ilyen rang!');
    felh.roles.add(rolename.id);
    let embed = new Discord.MessageEmbed()
        .setTitle("Rang adás")
        .addFields(
          {name:"Adta:",value:`${message.author}`,inline:true},
          {name:"Kapta:",value:`${felh}`,inline:true},
          {name:"Rang:",value:`${rolename}`,inline:true},
        )
        .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL())
        .setTimestamp();

    message.channel.send(embed);
}

module.exports.help = {
name: 'rangad',
aliases: ['rangadás','addrole']
}