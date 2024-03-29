const discord = require('discord.js')
const math = require('mathjs')

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    var question = args.join(' ')

    if(!question) return message.channel.send('Írjál be egy műveletet is!')

    let result;
    try {
        result = math.evaluate(question);

    } catch (e) {
        return message.channel.send('Nem értelmezhető a művelet!')
    }

    return message.channel.send(`${question} = **${result}**`)
}

module.exports.help = {
    name: `calc`,
    aliases: []
};