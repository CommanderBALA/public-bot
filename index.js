/////////////////////////////////////////////////////////////// FÜGVÉNYEK ///////////////////////////////////////////////////////////////
const Discord = require('discord.js')

//let GOOGLE_APY_KEY = 'AIzaSyCoemHSDvxT_n6Anm8RwTQFx5P4bALA0sA'

const Client = new Discord.Client({disableEveryone: true});
const fs = require('fs');


Client.aliases = new Discord.Collection();
Client.commands = new Discord.Collection();

/////////////////////////////////////////////////////////// WELCOME MESSAGE ////////////////////////////////////////////////////////////
Client.on('guildMemberAdd', async member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'belépők')
    if(!welcomeChannel) return
    const joinembed = new Discord.MessageEmbed()
    .setTitle('Új Belépő!')
    .setDescription(`Köszöntünk ${member.user} a(z) ${member.guild.name} szerveren!\nTe vagy a(z) **${member.guild.memberCount}.** felhasználó a szerveren\n:tada: :tada: :tada:`)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Belépés időpontja');

    welcomeChannel.send(joinembed);
    
})

Client.on('guildMemberAdd', async member => {
    await member.guild.channels.cache.find(c => c.name === `Tagok: ${member.guild.memberCount - 1}`&&c.type=== 'voice').setName(`Tagok: ${member.guild.memberCount}`)
    await member.guild.channels.cache.find(c => c.name === `Botok: ${members.filter(member => member.user.bot).size - 1}`&&c.type=== 'voice').setName(`Tagok: ${members.filter(member => member.user.bot).size}`)
    await member.guild.channels.cache.find(c => c.name === `Emberek: ${members.filter(member => !member.user.bot).size - 1}`&&c.type=== 'voice').setName(`Tagok: ${members.filter(member => !member.user.bot).size}`)
})

const snipes = new Discord.Collection()

Client.on('messageDelete', message => {
    snipes.set(message.channel.id, message)

    const logChannel = message.member.guild.channels.cache.find(c => c.name=== 'log' )
    const DeleteLog = new Discord.MessageEmbed()
    .setTitle('Üzenet törölve!')
    .addField(`Küldő:`, message.author)
    .addField('Csatorna:', message.channel)
    .addField('Üzenet:', `\`\`\`${message.content}\`\`\``)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setAuthor('Törlés időpontja')

    logChannel.send(DeleteLog)
})

Client.on('messageUpdate', async (oldMessage, newMessage) => {

    if(oldMessage.author === Client) return;

    const logChannel = oldMessage.member.guild.channels.cache.find(c => c.name === 'log')
    const UpdateLog = new Discord.MessageEmbed()
    .setTitle("Szerkesztett üzenet!")
    .addField('Szerkesztette:', oldMessage.author)
    .addField('Csatorna:', oldMessage.channel)
    .addField('Régi üzenet:', `\`\`\`${oldMessage.content}\`\`\``)
    .addField('Új üzenet:', `\`\`\`${newMessage.content}\`\`\``)
    .setColor('RANDOM')
    .setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setAuthor('Módosítás időpontja')
    await logChannel.send(UpdateLog)
})


///////////////////////////////////CAPTCHA/////////////////////////////////////

Client.on('guildMemberAdd', async member =>{
    const captcha = 1
    try{
        const msg = await member.send(`||${captcha}||, idő van more!`)
        try{
            const filter = m=>{
                if(m.author.bot) return;
                if(m.author.id === member.id && m.content === captcha) return true;
                else {
                    m.channel.send("Rossz a captcha!!!")
                    return false;
                }
            };
            
        } catch (err){
            console.log(err)
        }
    } catch (err){
        console.log(err)
    }
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


Client.on("message", async (message, guild) => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = '--';

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

    if(commands) commands.run(Client, message, args, prefix);
    
})


// Login To Discord with your app's Token
Client.login('NzkyNjkyMjAzMTgwNjU0NTky.X-haJA.ygAc7TLEoOokIMeqYUWXXF0kQbg');