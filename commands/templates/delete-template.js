const discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix) => {
if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`:x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Adminisztrátor\`)`);

if (!args[0]) {
    message.channel.send(`:ok_hand: Ha szeretnéd, hogy töröljek minden csatornát, kérlek írd be **${prefix}deletechannel i** parancsot!`);
}

if (args[0] == "i") {
    message.guild.channels.cache.forEach(channel => channel.delete());
    //////////////////////////////////////
    await message.guild.channels.delete()

}
}

module.exports.help = {
    name: "deletechannel",
    aliases: ["deletec"]
}