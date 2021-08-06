const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    const embed = new Discord.MessageEmbed()

    .setTitle("HELP")
    .addField("Weboldal: \nhttps://commanderbala.github.io/kripton.github.io/html/commands.html", "Itt van a parancsok listája")
    .addField("Support szerver: \nhttps://discord.com/invite/44VAMDfpHY ", "Itt vannak a botról infók: frissitések leállások, stb...")
    .addField("Bot behívása: Hamarosan...", "Itt tudod behívni a botot a szerveredre");

    message.channel.send(embed)

}

module.exports.help = {
    name: 'help',
    aliases: []
}