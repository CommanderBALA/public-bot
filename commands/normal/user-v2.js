const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

const userMention = message.mentions.users.first() || message.author;
const memberMention = message.mentions.members.first() || message.member;
let userinfo = {};
userinfo.bot = userMention.bot;
userinfo.createdat = userMention.createdAt;
userinfo.discrim = userMention.discriminator;
userinfo.id = userMention.id;
userinfo.mfa = userMention.mfaEnabled;
userinfo.pre = userMention.premium;
userinfo.presen = userMention.presence;
userinfo.tag = userMention.tag;
userinfo.uname = userMention.username;
userinfo.verified = userMention.verified;
userinfo.avatar = userMention.avatarURL;
//const rolesOfTheMember = memberMention.roles.filter(r => r.name !== '@everyone').map(role => role.name).join(', ')
if(userinfo.bot === "false") userinfo.bot === "Nem";
if(userinfo.bot === "true") userinfo.bot === "Igen";
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${userMention.tag} információi`)
 .setAuthor(message.author.tag, message.author.avatarURL())
 .addField(`Neve:`, userMention.tag)
 .addField(`ID-je:`, userMention.id, true)
 .addField("Készítve:",userinfo.createdat, true)
 .setFooter(`${Client.user.username}`, Client.user.displayAvatarURL())
 .setTimestamp();
 message.channel.send(embed);
}

module.exports.help = {
    name: 'user-v2',
    aliases: []
}