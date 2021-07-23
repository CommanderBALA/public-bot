const Discord = require('discord.js');
const got = require('got')

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

const memeEmbed = new Discord.MessageEmbed()
    
    got('https://www.reddit.com/r/meme/random/.json').then(response => {

        let content = JSON.parse(response.body);

        let permalink = content[0].data.children[0].data.permalink;

        let memeURL = `https://reddit.com${permalink}`;

        let memeImage = content[0].data.children[0].data.url;

        let memeTitle = content[0].data.children[0].data.title;

        let memeUpvotes = content[0].data.children[0].data.ups;

        let memeDownvotes = content[0].data.children[0].data.downs;

        let memeNumComments = content[0].data.children[0].data.num_comments;

        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeURL}`)        
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor('RANDOM') 
        memeEmbed.setFooter(`👍 ${memeUpvotes} | 👎 ${memeDownvotes} | 💬 ${memeNumComments}`)

        message.channel.send(memeEmbed)
    })
}



module.exports.help = {
    name: "meme",
    aliases: [] 
}