const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    let user = message.mentions.users.first()
    if(!user) return message.reply("**Nincs megjelölve ember!**")

    let nickname = args.slice(1).join(" ")
    if(!nickname) return message.reply("**Nem írtál új nicknevet!**")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const embed = new discord.MessageEmbed()
    .setTitle("✅ Kész!")
    .setDescription(`Sikeresen megváltoztattam neki: ${user.tag} a nicknevét erre: ${nickname} !`)
    .setColor('GREEN')
    .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name: 'nick',
    aliases: ['nickname','becenév']
}