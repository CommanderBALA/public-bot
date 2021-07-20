// Client === bot

// require the discord.js module
const Discord = require('discord.js');

// connect us to the config.json file
const config = require('./config.json');

// Create a new discord client
const bot = new Discord.Client({disableEveryone: true});

const fs = require('fs')

const xpfile = require('./xp.json');
const { dir } = require('console');
const prefix = ('-');

bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();

// The message that we will get in terminal when we lunch the bot 
bot.on('ready', async () =>{
    console.log(`████████╗███████╗███████╗███████╗████████╗    ██████╗  ██████╗ ████████╗               ██████╗ ███╗   ██╗██╗     ██╗███╗   ██╗███████╗\n ╚══██╔══╝██╔════╝██╔════╝╚══███╔╝╚══██╔══╝    ██╔══██╗██╔═══██╗╚══██╔══╝              ██╔═══██╗████╗  ██║██║     ██║████╗  ██║██╔════╝\n ██║   █████╗  ███████╗  ███╔╝    ██║       ██████╔╝██║   ██║   ██║       █████╗    ██║   ██║██╔██╗ ██║██║     ██║██╔██╗ ██║█████╗\n ██║   ██╔══╝  ╚════██║ ███╔╝     ██║       ██╔══██╗██║   ██║   ██║       ╚════╝    ██║   ██║██║╚██╗██║██║     ██║██║╚██╗██║██╔══╝\n ██║   ███████╗███████║███████╗   ██║       ██████╔╝╚██████╔╝   ██║                 ╚██████╔╝██║ ╚████║███████╗██║██║ ╚████║███████╗\n ╚═╝   ╚══════╝╚══════╝╚══════╝   ╚═╝       ╚═════╝  ╚═════╝    ╚═╝                  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
                                                                                                                                          `);

    //This will be status of our bot
    bot.user.setActivity("Tesztelés...", {type: "COMPETING"});
})

// üdvözlő és köszönő
bot.on("guildMemberAdd", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'تم-تهكير-سيرفرك-❕w')
    welcomeChannel.send(`Welcome ${member}`)
})

bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commands = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if (commands) commands.run(bot, message, args, prefix)

    if (cmd === `${prefix}version`) {
        return message.channel.send(`A bot jelenlegi verziója: **${config.version}**.`);
    }

    if (cmd === `${prefix}kezdés`) {
        return message.channel.send(`A bot programozásának kezdésének időpontja: **${config['Edit start']}**.`)
    }

})


// LEVEL SISTEM

bot.on("message", function(message){
    if(message.author.bot) return;
    var addXP = Math.floor(Math.random() *10);

    if (!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
            xp: 0,
            level: 1,
            reqxp: 100
        }

        fs.writeFile('./xp.json',JSON.stringify(xpfile),function(err){
            if(err) console.log("HIBA!!!!!"+ err)
        })
    }

    xpfile[message.author.id].xp += addXP

    if (xpfile[message.author.id].xp > xpfile[message.author.id].reqxp) {
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp
        xpfile[message.author.id].reqxp *= 2
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp)
        xpfile[message.author.id].level += 1

        message.reply("You are now level **" + xpfile[message.author.id].level+"**").then(
            msg=>msg.delete({timeout: "10000"})
        )
        
    }

    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console.log("HIBA!!!!!"+ err)
    })

    if (message.content.startsWith(`${prefix}level`)) {
        let user = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
        .setTitle("Level Card")
        .setColor("GREEN")
        .addField("Level: ", xpfile[user.id].level)
        .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
        .addField("XP Require: ", xpfile[user.id].reqxp)
        message.channel.send(embed);
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
      `Szia! Köszönöm, hogy behívtál a szerveredre!🙏\nA te szervereddel együtt már **${bot.guilds.cache.size}** szerveren vagyok bent!\nParancsaimahoz megtekintéséhez használd a **szervereden** a *${prefix}help* parancsot.\nHa szeretnél értesülni legújabb fejlesztéseinkről, leállásokról, gyere a developer (szerverre)[https://discord.gg/6STmYNGb6K]`
    );
  });


// Login to Discord whit your app's Token
bot.login(config.token);


bot.on('message', message => {
if (message.content.startsWith(`${prefix}serverstat`)) {
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
    
