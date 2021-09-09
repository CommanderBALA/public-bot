const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    const globalchannel = message.member.guild.channels.cache.find(c => c.name === 'kripton')
    const globalchat = Client.channels.cache.find(c => c.name === 'kripton')
    let szöveg = args.join(" ")

    if(!globalchannel)return message.reply('Nincs globalchat a szerveren!')

    for (let index = 0; index < globalchat.size; index++) {

        if(message.channel.name === "kripton"){

            globalchat.send(szöveg)
    
        
    } else {
        message.reply('Nem jó helyre küldted')
        return;
    }
}
    

}

module.exports.help = {
name: 'global',
aliases: []
}