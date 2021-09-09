const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Nem használhatod ezt a parancsot!')

    var channel = Client.channels.cache.get(message.channel.id)

    var posisi = channel.position

    channel.clone().then((channel2) => {
        
        channel2.setPosition(posisi)

        channel.delete()

        channel2.send(`Nuked this channel`).then(channel2.send(`https://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`))
    })
}
    


module.exports.help = {
    name: `nuke`,
    aliases: ['destroy']
}