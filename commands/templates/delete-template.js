const discord = require('discord.js');


module.exports.run = async (bot, message, args, prefix, dontpermission) => {
if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send('nem használhatod');

if (!args[0]) {
    message.channel.send(`Ha szeretnéd, hogy töröljek minden csatornát, kérlek írd be **${prefix}deletechannel i** parancsot!`);
}

if (args[0] == "i") {
    message.guild.channels.cache.forEach(channel => channel.delete());
    //////////////////////////////////////
    await message.guild.channels.delete();

}
}

module.exports.help = {
    name: "deletechannel",
    aliases: ["deletec"]
}