// Client === bot

// require the discord.js module
const Discord = require('discord.js');

// connect us to the config.json file
const config = require('./config.json');

// Create a new discord client
const bot = new Discord.Client({disableEveryone: true});

const fs = require('fs')
const db = require('quick.db');

const prefix = ('-')

const xpfile = require('./xp.json');
const { dir } = require('console');
const dontpermission = (':x: Nincs megfelelő jogosultságod a parancs használatához! :x:');

bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();

// The message that we will get in terminal when we lunch the bot 
bot.on('ready', async () =>{
    console.log(`${bot.user.username} online Lett!!!\n Jelenleg ${bot.guilds.cache.size} szerveren vagyok bent!\n ... még ${100-bot.guilds.cache.size} szerver kell hogy elérjem a 100-at`);

    //This will be status of our bot
    bot.user.setActivity("Tesztelés...", {type: "COMPETING"});
})

// üdvözlő és köszönő
bot.on("guildMemberAdd", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'belépők')
    welcomeChannel.send(`Köszöntünk ${member} a(z) ${member.guild.name}!`)
})

bot.on("guildMemberRemove", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'kilépők')
    welcomeChannel.send(`Sajnáljuk hogy elmentél ${member} :( .`)
})

bot.on("message", async (message, guild) =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = '-'
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commands = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if (commands) commands.run(bot, message, args, prefix, dontpermission)

    if (cmd === `-version`) {
        return message.channel.send(`A bot jelenlegi verziója: **${config.version}**.`);
    }

    if (cmd === `-kezdés`) {
        return message.channel.send(`A bot programozásának kezdésének időpontja: **${config['Edit start']}**.`)
    }

})



// Command Handler

fs.readdirSync('./commands/').forEach(dir => {

    fs.readdir(`./commands/${dir}`, (err, files) => {

        if (err) throw err

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if(jsFiles.length <= 0) {
            console.log("Can't find any command! ⚠️");
            return;
        }

        jsFiles.forEach(file =>{

            var fileGet = require(`./commands/${dir}/${file}`);
            

            try {
                console.log(`${file} - ✔️`)

                bot.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    bot.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {

                return console.log(`${file} - ❌ HIBA! ` + err);
            }
        });
    });
});

// Szerver owner-nek küldi üzi XD

bot.on("guildCreate", guild => {
    guild.owner.send(
      `Szia! Köszönöm, hogy behívtál a szerveredre!🙏\nA te szervereddel együtt már **${bot.guilds.cache.size}** szerveren vagyok bent!\nParancsaimahoz megtekintéséhez használd a **szervereden** a *-help* parancsot.\nHa szeretnél értesülni legújabb fejlesztéseinkről, leállásokról, gyere a developer (szerverre)[https://discord.gg/6STmYNGb6K]`
    );
  });


// Login to Discord whit your app's Token
bot.login(process.env.token);


bot.on('message', message => {
if (message.content.startsWith(`-serverstat`)) {
    message.delete();
    const embed = new Discord.MessageEmbed()
  .setThumbnail()
  .setColor('RANDOM')
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle(`${message.guild.name} szerver statisztikái:`)
  .addFields(
    {
        name: "Szerver neve:",
        value: message.guild.name,
        inline: true
    },
    {
        name: "Szerver ID-je:",
        value: message.guild.id,
        inline: true
    },
    {
        name: "Tulajdonos:",
        value: message.guild.owner.user.tag,
        inline: true
    },
    {
        name: "Tulajdonos ID-je:",
        value: message.guild.ownerID,
        inline: true
    },
    {
        name: "Tagok száma:",
        value: `${message.guild.memberCount}`,
        inline: true
    },
    {
      name: "Emberek: ",
      value: `${message.guild.members.cache.size -message.guild.members.cache.filter(m => m.user.bot).size }`,
      inline: true,
  },
  {
      name: "Botok száma: ",
      value: `${message.guild.members.cache.filter(m => m.user.bot).size}`,
      inline: true
  },
    {
        name: "Státuszok:",
        value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} :green_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} :red_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} :yellow_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "invisible").size} :black_circle: ${message.guild.members.cache.filter(m => m.user.presence.status == "offline").size} :white_circle:`,
        inline: true
    },
    
    {
        name: "Létrehozás dátuma: ",
        value: message.guild.createdAt.toLocaleDateString("hu") + ' , ' + message.guild.createdAt.toLocaleTimeString("hu"),
        inline: true
    },
    {
        name: "Régió: ",
        value: message.guild.region,
        inline: true
    },
    
  
    {
        name: `Elfogadott: `,
        value: message.guild.verified ? 'A szerver el van fogadva' : `A szerver nincsen elfogadva!`,
        inline: true
    },
  
    {
      name: "Rangok száma: ",
      value: `${message.guild.roles.cache.size}`,
      inline: true,
  },
    {
        name: "Emojik száma: ",
        value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'Nincsenek emojik' ,
        inline: true
    },
    {
        name: "Csatornák száma: ",
        value: message.guild.channels.cache.size,
        inline: true
    },
    {
      name: 'Boostok száma: ',
      value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} boost` : `Nincsenek boostok`,
      inline: true
  },
  )
  .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL())
  .setTimestamp();
  message.channel.send(embed)
  }
  })
    
