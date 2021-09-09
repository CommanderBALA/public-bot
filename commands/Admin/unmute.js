const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    if(!message.member.hasPermission('ADMINISTRATOR')) return;
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

    let mutedRole = message.guild.roles.cache.find(r => r.name == 'némítva');

    if(mutedRole) {
        member.roles.remove(mutedRole);

        message.channel.send(`Feloldtam a némítását neki: ${member} ! 😂`);
    }

}

module.exports.help = {
    name: `unmute`,
    aliases: []
};
