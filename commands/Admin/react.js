const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    
    if(!message.content.startsWith(prefix)) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You dont have the perms')

    // gets the role for the reaction
    let reactRole = message.mentions.roles.first()

    // if no role provided it will send this
    if(!reactRole) return message.channel.send(`Használd: -react [@rang]`)

    // create an embed
    message.delete();
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM") // the color of the embed 
    .setDescription(`Reagálj a ✅ , hogy megkapd a(z) ${reactRole} rangot!`) // desc of the embed

    // send the embed.
    let msg = await message.channel.send(embed)

    // reacts to the embed with an emoji
    await msg.react('✅')

    // filtering so it only works for the emoji choosen
    const reactionFilter = (reaction, user) => ["✅"].includes(reaction.emoji.name)

    // making a collection for the emoji
    const reactionCollector = msg.createReactionCollector(reactionFilter, { dispose: true })

    // setting the collection that when the reaction was removed
    reactionCollector.on("remove", (reaction, user) => {
        
        // if the bot removed their reaction return
        if(user.bot) return;

        // getting the member of the server who reacted 
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

        // remove the role when he/she remove his/her reaction.
        member.roles.remove(reactRole.id)
    })

    reactionCollector.on("collect", (reaction, user) => {
        
        // if a bot reacted return
        if(user.bot) return;

        // getting the member of the server who reacted 
        let member = reaction.message.guild.members.cache.find(member => member.id === user.id)

        // adds the role to the member!
        member.roles.add(reactRole.id)
    })
}

module.exports.help = {
    name: `react`,
    aliases: []
}