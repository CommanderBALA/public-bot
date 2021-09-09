const Discord = require('discord.js');


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

        let elköldöttembed = new Discord.MessageEmbed();

        let küldö = message.author

        let color = args[0];
        let Title = args[1]
        let Timestamp = args[2]
        let Footer = args[3]
        let szöveg = args.slice(4).join(" ");
        

        if(!args[0]){
            message.reply('Nincs megadva Szín!')
            return;
        }
        if(!args[1]){
            message.reply('Nincs megadva Cím!')
            return;
        }
        if(!args[2]){
            message.reply('Nincs megadva hogy legyen-e Idő!')
            return;
        }
        if(!args[3]){
            message.reply('Nincs megadva hogy legyen-e Láb!')
            return;
        }
        if(!args[4]){
            message.reply('Nincs megadva Szöveg!')
            return;
        }

        if(args[1] === 'nem'){
            Title = " "
        } else {
            elköldöttembed.setTitle(args[1])
        }

        if(args[2] === 'nem'){
            Timestamp = " "
        } else if (args[2]==='igen'){
            elköldöttembed.setTimestamp()
        }

        if(args[3] === 'nem'){
            Footer = " "
        } else if(args[3]==='igen') {
            elköldöttembed.setFooter(`Üzenet író: ${küldö.tag}`, küldö.displayAvatarURL())
        }

        elköldöttembed.setColor(color)
        elköldöttembed.setDescription(szöveg)

        await message.channel.send(elköldöttembed);


        

}


module.exports.help = {
    name: "embed",
    aliases: []
}