const Discord = require('discord.js')

const Client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const prefix = ('-');


Client.on('guildMemberAdd', async member => {

    const background = 'https://cdn.discordapp.com/attachments/875633767438512128/875644365563895808/pngtree-horizontal-vector-halloween-banner-background-with-grunge-border-image_297712.png'
    const avatar = member.user.displayAvatarURL({dynamic: false})
    const title = member.user.username 
    const sub = member.guild.memberCount
    const color = 'FFFFFF'
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/welcomebanner?background=${background}&avatar=${avatar}&title=${title}&subtitle=${sub}&textcolor=${color}`,{
        headers: {
            'APIKEY': 'f8xftlruivhjdRn85zYJoSxBrDcDj2Pxu0Loa8'
        }
    })

    const channelName = member.guild.channels.cache.find(c => c.name === 'belépők')
    const wChannel = member.guild.channels.cache.get(channelName)
    let Image = await res.buffer()
    const WImage = new Discord.MessageAttachment(Image)
    wChannel.send(WImage)
})




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