const discord = require('discord.js');
const moment = require(`moment`)


const verificationLevels = {
    NONE: 'Nincs',
    LOW: 'Alacsony',
    MEDIUM: 'Közepes',
    HIGH: 'Magas',
    VERY_HIGHT: 'Magasabb'
}

const regions = {
    brazil: 'Brazília',
    europe: 'Európa',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japán',
    russia: 'Oroszország',
    singapore: 'Szingapúr',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'Közép-Amerika',
    'us-east': 'Észak-Amerika',
    'us-west': 'US West',
    'us-south': 'US South'
}

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

    const members = message.guild.members.cache;
    
    const channels = message.guild.channels.cache;
    
    const emojis = message.guild.emojis.cache

    
    let rolesdisplay;

    if(roles.length < 20) {
        rolesdisplay = roles.join(' ')
    } else {
        rolesdisplay = roles.slice(20).join(' ')
    }

    const { guild } = message
    
    const { name, region, memberCount, owner } = guild
    
    const icon = guild.iconURL()

    var serverEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    
    .setTitle(`Szerverinfó: ${name}`)
    
    .setThumbnail(message.guild.iconURL())
    
    .addField(`General`, [
        `**Név:** ${name}`,
        `**Szerver ID:** ${message.guild.id}`,
        `**Tulajdonos:** ${message.guild.owner.user.tag}`,
        `**Régió:** ${regions[message.guild.region]}`,
        `**Boostok száma:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Nincsenek boostok'}`,
        `**Moderáció:** ${verificationLevels[message.guild.verificationLevel]}`,
        `**Boost szint:** ${message.guild.premiumSubscriptionCount || '0'}`,
        `**Szerver készítése:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
        '\u200b'
    ])
    
    .addField('Statisztikák:', [
        `**Rangok száma:** ${roles.length}`,
        `**Összes emotikon:** ${emojis.size}`,
        `**Sima emotikonok:** ${emojis.filter(emoji => !emoji.animated).size}`,
        `**Animált emotikonok:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Tagok:** ${message.guild.memberCount}`,
        `**Emberek:** ${members.filter(member => !member.user.bot).size}`,
        `**Botok:** ${members.filter(member => member.user.bot).size}`,
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`, 
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`, 
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
        `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
        `**Szöveges csatornák:** ${channels.filter(channel => channel.type === 'text').size}`, 
        `**Hang csatornák:** ${channels.filter(channel => channel.type === 'voice').size}`,
        '\u200b'
    ])
    
    .addField(`Roles [${roles.length - 1}]`, rolesdisplay)
    
    message.channel.send(serverEmbed)
}

module.exports.help = {
    name: "szerver",
    aliases: ['szerver-infó', 'szerverinfó']
}