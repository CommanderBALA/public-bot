const discord = require('discord.js'); 
const moment = require("moment");

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    let mentionedMember = message.mentions.users.first() || message.author;

    var game = mentionedMember.presence.game;
    var status = mentionedMember.presence.status;
     
    if(status == 'dnd') status = "Ne zavarjanak"
    if(status == 'online') status = "Online"
    if(status == 'offline') status = "Offline"
    if(status === 'idle') status = "Távol"

    const roles = mentionedMember.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);

    let displayRoles;

    if(roles.length < 20) {
        displayRoles = roles.join(' ')
        if(roles.length < 1) displayRoles = "Nincsenek rangok"

    } else {
        displayRoles = roles.slice(20).join(' ')
    }

    const userEmbed = new discord.MessageEmbed()
     .setAuthor(`User information of ${mentionedMember.user.username}`, mentionedMember.user.displayAvatarURL({dynamic: true, size: 2048}))
     .addField(`**Tag: **`, `${mentionedMember.user.tag}`)
     .addField(`**Felhasználónév: **`, mentionedMember.user.username || "Nem található")
     .addField(`**ID: **`, `${mentionedMember.id}`)
     .addField(`**Profilkép: **`, `[Nyomj ide hogy megnézd a profilképét](${mentionedMember.user.displayAvatarURL({ dynamic: true})})`)
     .addField(`**Státusz: **`, `${status}`)
     .addField(`**Jaték: **`, ` ${game || 'Éppen nem játszik'} `)
     .addField(`**Profil készítése: **`, `${moment(mentionedMember.createdAt).format("YYYY-MM-DD [**-**] HH:mm")}`)
     .addField(`**Szerverre való belépés: **`, `${moment(mentionedMember.joinedAt).format("YYYY-MM-DD [**-**] HH:mm")}`)
     .addField(`**Rangok: [${roles.length}]**`, `${displayRoles}`)
    message.channel.send(userEmbed)
    
}

module.exports.help = {
    name: "user",
    aliases: ['userinfo']
}