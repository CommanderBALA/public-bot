const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

  if(!message.content.startsWith(prefix)) return;


    // the perm. that the member need it to ban someone
    if(!message.member.hasPermission('BAN_MEMBERS'))
    // if someone dont hv perm it will send this message
    message.channel.send("You don't have permission to use that command.");

    else {
      if (!message.guild) return;
  
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

          // banning code 
            .ban({
                // the reason
              reason: 'They were bad!',
            })
            .then(() => {
            // it will send this message once the person is banned
              message.reply(`Successfully banned`);
            })
            // log err in the console
            .catch(err => {
              // if the bot wasnt able to ban the member bcz he hv a higher role it will not ban him and if the bot dont hv to perm it will not ban him and send this messge
              message.reply('I was unable to ban the member');
  
              console.error(err);
            });
        } else {
          // if the member isnt in the server and u typed e.g. =ban @karimx it will send this message
          message.reply("That user isn't in this guild!");
        }
      } else {
       // if u typed =ban without mentioning some1 it will send this message
        message.reply("You didn't mention the user to ban!");
      }
  };
}

module.exports.help = {
    name: `ban`,
    aliases: []
};
