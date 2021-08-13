const Discord = require('discord.js')

const Client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const prefix = ('-');
const fetch = require('node-fetch')

Client.aliases = new Discord.Collection();
Client.commands = new Discord.Collection();


Client.on("guildMemberAdd", async (member) => {

    const background = 'https://cdn.discordapp.com/attachments/875633767438512128/875644365563895808/pngtree-horizontal-vector-halloween-banner-background-with-grunge-border-image_297712.png'
    const avatar = member.user.displayAvatarURL({dynamic: false})
    const title = member.user.username
    const Member12 = member.guild.memberCount
    const sub = `Member ${Member12}`
    const color = 'FFFFFF'
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/welcomebanner?background=${background}&avatar=${avatar}&title=${title}&subtitle=${sub}&textcolor=${color}`, {
        headers: {
            'APIKEY': 'f8xftlruivhjdRn85zYJoSxBrDcDj2Pxu0Loa8'
        }
    })
    
    const welcomechannel = member.guild.channels.cache.find(c => c.name === 'belépők')
    const Wchannel =  member.guild.channels.cache.get(welcomechannel)
    let Image = await res.buffer()
    const WImage = new Discord.MessageAttachment(Image)
    Wchannel.send(`Welcome to the server ${member}`, WImage)

})

// Welcome message 
//Client.on("guildMemberAdd", member => {
//    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'üdvözlő')
//    welcomeChannel.send (`Köszöntün, ${member} a(z) **${member.guild.name}** szerveren!`)
//})

// Bye Message
//Client.on("guildMemberRemove", member => {
//    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'cool')
//    welcomeChannel.send (`Goodbye! ${member.user.username}`)
//})


// Commands Handler 
fs.readdirSync('./commands/').forEach(dir => {

    fs.readdir(`./commands/${dir}`, (err, files) => {

        if (err) throw err;

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) {
          console.log("Can't find any commands!");
          return;
        }
        
        jsFiles.forEach(file => {

            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`${file} - ✔️`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                return console.log(`${file} - ❌ ,  HIBA ---`+err);
            }
        });
    });
})


Client.on("ready", async () => {
    console.log(`${Client.user.username} is Online!`)

    Client.user.setActivity("Tesztelés...", {type: 'COMPETING'})
});

Client.on("message", async message => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = '--';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

    if(commands) commands.run(Client, message, args, prefix);
    
})

// Login To Discord with your app's Token
Client.login(process.env.token);