const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    const embed = new Discord.MessageEmbed()

    .setTitle("HELP")
    .addField("Weboldal: ", "Itt van a parancsok listája", true)
    .url("https://commanderbala.github.io/kripton.github.io/html/commands.html")
    .addField("Support szerver ", "Itt vannak a botról infók: frissitések leállások, stb...")
    .url("https://discord.com/invite/44VAMDfpHY")
    .addField("Bot behívása", "Itt tudod behívni a botot a szerveredre");

    message.channel.send(embed)

}

module.exports.help = {
    name: 'invite',
    aliases: []
}