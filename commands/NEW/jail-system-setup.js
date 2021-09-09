const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    //let rang = message.guild.rangs.cache.find(r => r.name === 'Rab')
    //let rang2 = message.guild.rangs.cache.find(r => r.name === 'Őr')
    let csatorna = message.member.guild.channels.cache.find(c => c.name === 'Börtön-bíróság' && c.type === 'text')
    let csatorna2 = message.member.guild.channels.cache.find(c => c.name === 'Börtön-tárgyaló' && c.type === 'text')
    let kategória = message.member.guild.channels.cache.find(c => c.name === 'Börtön')    

        if(kategória) return
        message.guild.channels.create("Börtön", {
        type: "category"
            });
        

        if(csatorna2) return
        await message.guild.channels.create('Börtön-tárgyaló', {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(kategória).then(
                    (settedParent) => {
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                            VIEW_CHANNEL: false
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Rab'), {
                            VIEW_CHANNEL: true,
                            SEND_MESSAGES: true
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Őr'), {
                            VIEW_CHANNEL: true,
                            SEND_MESSAGES: true,
                            MANAGE_MESSAGES: true
                        })
                        var logEmbed = new Discord.MessageEmbed()
                        .setTitle(`TÁRGYALÓ`)
                        .setDescription(`Az Őrök és a Rabok itt tudnak beszélni arról hogy mi volt a problima amiért idekerültél, vagy esetleg megbeszélni milyen feltételekkel engednek el!`)
                        .setTimestamp()
                        .setColor("GOLD")
                        settedParent.send(logEmbed)
                        settedParent.send('**(@everyone)**')
                    }
                    ).catch(err => {
                        return console.log(err)
                    });
                    
        }
        ).catch(err => {
            return console.log(err)
        });
        

        if(csatorna) return
        await message.guild.channels.create('Börtön-bíróság', {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(kategória).then(
                    (settedParent) => {
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                            VIEW_CHANNEL: false
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Rab'), {
                            VIEW_CHANNEL: true,
                            SEND_MESSAGES: false
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Őr'), {
                            VIEW_CHANNEL: true,
                            SEND_MESSAGES: true,
                            MANAGE_MESSAGES: true
                        })
                        var logEmbed = new Discord.MessageEmbed()
                        .setTitle(`BÍRÓSÁG`)
                        .setDescription(`Az Őrök és a Bot itt írják ki az ítéleteket`)
                        .setTimestamp()
                        .setColor("GOLD")
                        settedParent.send(logEmbed)
                        settedParent.send('**(@everyone)**')
                    }).catch(err => {
                        return console.log(err)
                    });
        }).catch(err => {
            return console.log(err)
        });

        message.guild.roles.create({
            data: {
              name: "Rab",
              color: "#ede84e",
              permissions: []
            }
        });
        message.guild.roles.create({
            data: {
              name: "Őr",
              color: "#0009b5",
              permissions: []
            }
        });
    
}

module.exports.help = {
name: 'bs',
aliases: []
}