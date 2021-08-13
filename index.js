const Discord = require('discord.js')

const Client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const prefix = ('-');
const Canvas = require('canvas')

Client.aliases = new Discord.Collection();
Client.commands = new Discord.Collection();

var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = Canvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fileStyle = '#ffffff'

Canvas.loadImage("./img/bg.png").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
    welcomeCanvas.context.fillText("welcome", 360, 360)
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()
})

Client.on('guildMemberAdd', async member =>{
    const welcomeChannel = Client.channels.cache.find(c => c.name === 'belépők');
    let canvas = welcomeCanvas;
    canvas.context.font = '42px sans-serif'
    canvas.context.textAling = 'centre';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px sans-serif'
    canvas.context.fillText(`A ${member.guild.memberCount}. ember vagy a szerveren!`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 199, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({format: 'png', size: '1024'}))
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238)
    })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
    try{
        welcomeChannel.send(`:wave: Hello ${member}, welcome to ${member.guild.name}!`, atta)
    }catch(error){
        console.log('HIBA!!! - ' + error)
    }
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