const Discord = require('discord.js');
const randomAnimal = require("random-animal.js")

module.exports.run = async (Client, message, args, prefix) => {

    if(!args[0]) return message.reply('Add meg milyen állatot küldjek!')

    if(args[0] ==='macska'){
        randomAnimal.randomCat().then(cat => {
            message.channel.send(cat)
        }) 
    } else if(args[0] ==='kutya'){
        randomAnimal.randomDog().then(dog => {
            message.channel.send(dog)
        }) 
    } else if(args[0] ==='koala'){
        randomAnimal.randomKoala().then(dog => {
            message.channel.send(dog)
        }) 
    } else if(args[0] ==='panda'){
        randomAnimal.randomPanda().then(dog => {
            message.channel.send(dog)
        }) 
    } else if(args[0] ==='vöröspanda'){
        randomAnimal.randomRedPanda().then(dog => {
            message.channel.send(dog)
        }) 
    } else if(args[0] ==='róka'){
        randomAnimal.randomFox().then(dog => {
            message.channel.send(dog)
        }) 
    } else if(args[0] ==='madár'){
        randomAnimal.randomBird().then(dog => {
            message.channel.send(dog)
        }) 
    } else {
        message.reply('Nincs ilyen állat!')
    }
}

module.exports.help = {
name: 'állat',
aliases: []
}