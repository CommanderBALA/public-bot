const { MessageEmbed } = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
  let description =
            Client.guilds.cache
        .sort((a, b) => b.memberCount - a.memberCount)
        .map(r => r)
        .map((r, i) => `${i + 1} - ${r.name}\n ID: - ${r.id}`)
        .slice(0, 100)
        .join("\n");
        return message.channel.send("\n" + description + "\n", { split: { char: '\n' } })

}
module.exports.help = {
    name: 'szerverek',
    aliases: []
}