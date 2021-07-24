const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

  if(!message.content.startsWith(prefix)) return;


    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Nem bannolhatsz embereket!').then(msg => msg.delete({timeout: "2000"}));

    else {
      if (!message.guild) return;
  
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

            .ban({
              reason: `Ki lett bannolva a szerverről ${message.author.name} által!`,
            })
            .then(() => {
              message.reply(`Sikeres bannolás!`);
            })
            .catch(err => {
              message.reply('Nem tudom kitiltani a felhasználót (indokok: magasabb a rangja mint a botnak, rendszergazda jogosultsága van, ő a tulajdonos, stb...)');
  
              console.error(err);
            });
        } else {
          message.reply("Nem találok ilyen felhasználót a szerveren");
        }
      } else {
        message.reply("Nincs említve felhasználó!");
      }
  };
}

module.exports.help = {
    name: `ban`,
    aliases: []
};
