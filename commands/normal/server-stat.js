const Discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    if (message.content.startsWith('HQ-bott')) {
        message.delete();
        const embed = new Discord.MessageEmbed()
      .setThumbnail()
      .setColor('RANDOM')
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`${message.guild.name} szerver statisztikái:`)
      .addFields(
        {
            name: "Szerver neve:",
            value: message.guild.name,
            inline: true
        },
        {
            name: "Szerver ID-je:",
            value: message.guild.id,
            inline: true
        },
        {
            name: "Tulajdonos:",
            value: message.guild.owner.user.tag,
            inline: true
        },
        {
            name: "Tulajdonos ID-je:",
            value: message.guild.ownerID,
            inline: true
        },
        {
            name: "Tagok száma:",
            value: `${message.guild.memberCount}`,
            inline: true
        },
        {
          name: "Emberek: ",
          value: `${message.guild.members.cache.size -message.guild.members.cache.filter(m => m.user.bot).size }`,
          inline: true,
      },
      {
          name: "Botok száma: ",
          value: `${message.guild.members.cache.filter(m => m.user.bot).size}`,
          inline: true
      },
        {
            name: "Státuszok:",
            value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} :green_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} :red_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} :yellow_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} :white_circle:`,
            inline: true
        },
        
        {
            name: "Létrehozás dátuma: ",
            value: message.guild.createdAt.toLocaleDateString("hu") + ' , ' + message.guild.createdAt.toLocaleTimeString("hu"),
            inline: true
        },
        {
            name: "Régió: ",
            value: message.guild.region,
            inline: true
        },
        
      
        {
            name: `Elfogadott: `,
            value: message.guild.verified ? 'A szerver el van fogadva' : `A szerver nincsen elfogadva!`,
            inline: true
        },
      
        {
          name: "Rangok száma: ",
          value: `${message.guild.roles.cache.size}`,
          inline: true,
      },
        {
            name: "Emojik száma: ",
            value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'Nincsenek emojik' ,
            inline: true
        },
        {
            name: "Csatornák száma: ",
            value: message.guild.channels.cache.size,
            inline: true
        },
        {
          name: 'Boostok száma: ',
          value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} boost` : `Nincsenek boostok`,
          inline: true
      },
      )
      .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL())
      .setTimestamp();
      message.channel.send(embed)
      }
      
        

    
}

module.exports.help = {
    name: 'serverstat',
    aliases: []
};