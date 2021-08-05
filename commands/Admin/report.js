const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    let user = message.mentions.users.first()
    if (!user) return message.channel.send('Nincs megjelölve felhasználó!')

    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send("Nincs indok megadva!")

    let Avatar = user.displayAvatarURL();
    let Channel = message.guild.channels.cache.find((ch) => ch.name === "jelentések")
    if (!Channel) return message.channel.send("Nincsen olyan csatorna ahhol a staffok tudják fogadni a jelentéseket! Szükséges szoba neve: `jelentések`");

    const embed = new discord.MessageEmbed()
    .setTitle('Új jelentés!')
    .setDescription(`Küldő: \`${message.author.tag}\` Jelentett ember: \`${user.tag}\`!`)
    .setColor("RED")
    .setThumbnail(Avatar)
    .addFields(
        { name: "Jelentő ID: ", value: `${message.author.id}`, inline: true},
        { name: "Jelentő Tag: ", value: `${message.author.tag}`, inline: true},
        { name: "Jelentett ID: ", value: `${user.id}`, inline: true},
        { name: "Jelentett Tag: ", value: `${user.tag}`, inline: true},
        { name: "Indok", value: `${reason}`, inline: true}
    )
    Channel.send(embed)
    message.channel.send('A jelentés sikeresen elküldve! 📨')

}

module.exports.help = {
    name: "report",
    aliases: ['jelentés']
}