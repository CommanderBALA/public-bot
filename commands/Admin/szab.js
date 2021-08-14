const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith(prefix)) return;

    await message.channel.send('.').then(msg => msg.delete({timeout: '1500'}))

    const page1 = new discord.MessageEmbed()
    .setTitle('SZABÁLYZAT')
    .setDescription("**1. A felhasználókra vonatkozó szabályok:**\n-    Rangokért keresd a Vezetőséget!\n-    Tilos sértő nicknevet használni!\n\n**2. A szobákra vonatkozó szabályok:**\n-    Ne spamelj!\n-    Ne küldj NSFW tartalmakat!\n-    Ne káromkodj!\n-    Tilos zaklatnod és szidalmaznod a Staff tagokat!\n-    Tilos a hirdetés!\n-    Ne élj vissza a rangoddal!\n-    A csatornákat megfelelően használd!\n\n**3. Staff tagokra vonatkozó szabályok:**\n-    Legyél tisztességes mindenkivel szemben!\n-    Ha kell bannolni/tiltani légy bátor és csináld!\n-    Ne élj vissza a rangoddal!\n\n\n**-    Amennyiben a szabályzatot nem ismered az nem mentesít  annak betartása alól, következményei alól!**\n\n**-    A szabályzat mindenkire érvényes!**\n\n**-    Utolsó módosítás: 2021.08.14.**\n\n**-    Ezek mellett:** **https://discord.com/terms**")
    .addField('Emellett:', 'A szerverünkre való csatlakozáskor elfogadod a szabályzatunkat!')

    const page2 = new discord.MessageEmbed()
    .setTitle('page 2')
    .setDescription('this is an example for page 2')

    const page3 = new discord.MessageEmbed()
    .setTitle('Page 3')
    .setDescription('this is an example for page 3')


    const pages = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '15000'

    await pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'szabályzat',
    aliases: []
}
