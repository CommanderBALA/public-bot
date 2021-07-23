// connecting to discord
const Discord = require('discord.js')


// create a new Discord Client 
const Client = new Discord.Client({disableEveryone: true});

// we make a new system for the cmds
Client.commands = new Discord.Collection();

// require the fs module
const fs = require('fs');


//define a prefix
const prefix = ('-');

// it creates a new function for our aliases
Client.aliases = new Discord.Collection();


// Welcome message 

Client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'cool')
    welcomeChannel.send (`welcome! ${member}`)
})

// Bye Message

Client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'cool')
    welcomeChannel.send (`Goodbye! ${member}`)
})




// Commands Handler 

// get into the cmds folder
fs.readdirSync('./commands/').forEach(dir => {

    //in the cmds folder, we gonna check for the category
    fs.readdir(`./commands/${dir}`, (err, files) => {

        // console log err (catch err)
        if (err) throw err;

         // checking if the files ends with .js if its a javascript file
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

         // if there is no cmds in the file it will return
        if (jsFiles.length <= 0) {
          console.log("Can't find any commands!");
          return;
        }

        
        jsFiles.forEach(file => {

            // console the loaded cmds 
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`${file} - ✔️`)

            // gonna let the cmds run
            try {
                Client.commands.set(fileGet.help.name, fileGet);

                // it search in the cmds folder if there is any aliases
                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
              // catch err in console  
                return console.log(`${file} - ❌ ,  HIBA ---`+err);
            }
        });
    });
});















// The message that we will get in terminal when we lunch the bot
Client.on("ready", async () => {
    console.log(`${Client.user.username} is Online!`)

    // This Will be the Status Of our Bot
    Client.user.setActivity("TESZT", {type: "CUSTOM_STATUS"})
});









Client.on("message", async message => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    // it will make the cmd work with him orginal name and his aliases
    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

    if(commands) commands.run(Client, message, args, prefix);
   

})

// Login To Discord with your app's Token
Client.login(process.env.token);