const Discord = require('discord.js')

const Client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const prefix = ('-');
const ultrax = require('ultrax')

ultrax.inviteLogger(Client)

Client.aliases = new Discord.Collection();
Client.commands = new Discord.Collection();


// Welcome message
Client.on('guildMemberAdd', (member, invite, inviter) => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'üdvözlő')
    const joinembed = new Discord.MessageEmbed()
    .setTitle('Új Belépő!')
    .setDescription(`Köszöntünk ${member.user} a(z) ${member.guild.name} szerveren!\nTe vagy a(z) **${member.guild.memberCount}.** felhasználó a szerveren\n:tada: :tada: :tada:\n${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
    .setImage(member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Belépés időpontja')
    welcomeChannel.send(joinembed)
}) 

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