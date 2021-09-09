const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("")
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(``)
      let felh = message.guild.member(message.mentions.users.first());
      if(!felh) return message.reply(`Kérlek jelöld meg azt a felhasználót, akinek el szeretnéd hogy vegyem a rang`)
      let args1 = message.content.split(" ").slice(2);
      if(!args1) return message.reply(`<a:x_:736342460522823768> Nem jelöltél meg rangot! (**${prefix}takerole [@név] [@rang]**)`);
      let rolename = message.mentions.roles.first();
      if(!rolename) return message.reply('<a:x_:736342460522823768> Nem létezik ilyen rang!');
      felh.roles.remove(rolename);
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("Rang elvétel")
      .addFields(
        {name:"Elvette:",value:`${message.author}`,inline:true},
        {name:"Elvesztette:",value:`${felh}`,inline:true},
        {name:"Rang:",value:`${rolename}`,inline:true},
      )
      .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL())
      .setTimestamp();
      message.channel.send(embed);
 

}

module.exports.help = {
name: 'rangelvesz',
aliases: []
}