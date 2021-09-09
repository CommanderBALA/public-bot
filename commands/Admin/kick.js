const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

  if(!message.content.startsWith(prefix)) return;

  let reason = `Ki lett rúgva a szerverről ${message.author} által!\n Indok: ${args.slice(1).join(" ")}`

    if(!message.member.hasPermission('KICK_MEMBERS'))return message.channel.send("Nem rúghatsz ki embereket!").then(m => m.delete({timeout: '2000'}))

    else {
      if (!message.guild) return;
  
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

            .kick({
              reason: reason,
            })
            .then(() => {
              message.reply(`Sikeres kirúgás!`);
            })
            .catch(err => {
              message.reply('Nem tudom kirúgni ezt az embert');
  
              console.error(err);
            });
        } else {
          message.reply("Nem találok ilyen embert a szerveren!!");
        }
      } else {
        message.reply("Nincs megjelölve ember!");
      }
  };
}

module.exports.help = {
    name: `kick`,
    aliases: []
};
