const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    let ertekek = []
    

    if(!args[0] || !args[1]) return message.reply('Nincsenek megadva szavak!')

    if(args[1]){
        ertekek = [args[0],args[1]]

        
    }
    if(args[2]){
        ertekek = [args[0],args[1],args[2]]
        
    }
    if(args[3]){
        ertekek = [args[0],args[1],args[2],args[3]]
        
    }
    if(args[4]){
        ertekek = [args[0],args[1],args[2],args[3],args[4]]
        
    }
    if(args[5]){
        ertekek = [args[0],args[1],args[2],args[3],args[4],args[5]]
        
    }
    if(args[6]){
        ertekek = [args[0],args[1],args[2],args[3],args[4],args[5],args[6]]
        
    }
    if(args[7]){
        ertekek = [args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]]
        
    }
    if(args[8]){
        ertekek = [args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]]
        
    }
    if(args[9]){
        ertekek = [args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9]]
        
    }
    if(args[10]){
        message.reply('Max 10 szót adhat meg!')
        return;
    }

    let eredmeny = ertekek[Math.floor(Math.random()* ertekek.length -1)];
    await message.channel.send(eredmeny)
    

    
}

module.exports.help = {
    name: 'választó',
    aliases: []
}