const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    message.channel.send('***Hamarosan...***')
    const embed = new Discord.MessageEmbed()

    .setTitle("Bot-hoz tartozó dolgok")
    .addField("Weboldal: ", "https://commanderbala.github.io/kripton.github.io/html/commands.html", true)
    .addField("Support szerver"("https://discord.com/invite/44VAMDfpHY"), "Itt vannak a botról infók: frissitések leállások, stb...")
    .addField("Bot behívása", "Itt tudod behívni a botot a szerveredre");

    message.channel.send(embed)

}

module.exports.help = {
    name: 'invite',
    aliases: []
}