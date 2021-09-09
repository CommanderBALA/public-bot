const Discord = require('discord.js');
const CoinGecko = require('coingecko-api');
 
const CoinGeckoClient = new CoinGecko();

module.exports.run = async (Client, message, args, prefix) => {

    if(!args[0])return message.reply('Nincs megadva pénznem: **eur, usd, huf**')

    let data1 = args[0]
    
    let data = await CoinGeckoClient.simple.price({
        ids: ['bitcoin'],
        vs_currencies: [data1]
    });

    let cryptodat = data.data.bitcoin.huf

    if(data1==='huf'){
        cryptodat;
    }
    if(data1==='usd'){
        cryptodat = data.data.bitcoin.usd
    }
    if(data1==='eur'){
        cryptodat = data.data.bitcoin.eur
    }
    
    await message.channel.send(`A **Bitcoin** jelenlegi árfolyama: **${cryptodat}** ${data1}!`);

}

module.exports.help = {
name: 'crypto',
aliases: []
}