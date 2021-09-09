const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith(prefix)) return;

    await message.channel.send('Meg fognak jelenni szabályzatok, a lenti nyilakkal tudsz lapozni közöttük, összesen **30 másodperc**ed van kiválasztani melyiket szeretnéd!').then(msg => msg.delete({timeout: '3500'}))

    const page1 = new discord.MessageEmbed()
    .setTitle('SZABÁLYZAT')
    .setDescription("**1. A felhasználókra vonatkozó szabályok:**\n-    Rangokért keresd a Vezetőséget!\n-    Tilos sértő nicknevet használni!\n\n**2. A szobákra vonatkozó szabályok:**\n-    Ne spamelj!\n-    Ne küldj NSFW tartalmakat!\n-    Ne káromkodj!\n-    Tilos zaklatnod és szidalmaznod a Staff tagokat!\n-    Tilos a hirdetés!\n-    Ne élj vissza a rangoddal!\n-    A csatornákat megfelelően használd!\n\n**3. Staff tagokra vonatkozó szabályok:**\n-    Legyél tisztességes mindenkivel szemben!\n-    Ha kell bannolni/tiltani légy bátor és csináld!\n-    Ne élj vissza a rangoddal!\n\n\n**-    Amennyiben a szabályzatot nem ismered az nem mentesít  annak betartása alól, következményei alól!**\n\n**-    A szabályzat mindenkire érvényes!**\n\n**-    Utolsó módosítás: 2021.08.14.**\n\n**-    Ezek mellett:** **https://discord.com/terms**\n\n **- A szerverünkre való csatlakozáskor elfogadod a szabályzatunkat!**")
    .setColor('BLUE')
    .setTimestamp()

    const page2 = new discord.MessageEmbed()
    .setTitle('SZABÁLYZAT')
    .setDescription(`:clipboard:  ***SZABÁLYZAT***  :clipboard:\n\n:busts_in_silhouette: **A felhasználókra vonatkozó szabályok:** :busts_in_silhouette:\n-    Tilos sértő nicknevet használni!\n-    A profilod ne tartalmazzon *hirdetést, 18+ -os dolgokat, csúnyaszavakat, félreérthető emotikonokat, likeket*\n-    Ha bármi ilyet tartalmazna hitelesítés után azonnal nyiss egy ticketet és szólj a vezetőségnek, hogy ne ők vegyék észre hamarabb\n\n:speech_balloon:  **A szobákra vonatkozó szabályok:** :speech_balloon:\n-    Ne spamelj!\n-    Ne küldj NSFW tartalmakat!\n-    Ne káromkodj!\n-    Tilos zaklatnod és szidalmaznod a Staff tagokat!\n-    Tilos a hirdetés!\n-    Ne zaklasd a játékostársadat, ha olyan játékkal játszik amit Te nem szeretsz!\n-    A játéknak megfelelő csatornában keresd a csapattársad!\n-    A csatornákat megfelelően használd!\n\n:ninja: **Staff tagokra vonatkozó szabályok:** :ninja:\n-    Legyél tisztességes mindenkivel szemben!\n-    Ha kell bannolni/tiltani légy bátor és csináld!\n-    Ne élj vissza a rangoddal!\n\n ***:no_entry_sign: Amennyiben a szabályzatot nem ismered az nem mentesít annak betartása alól, következményei alól! :no_entry_sign:***\n\n**-    A szabályzat mindenkire érvényes!**\n**-    A szabályzat bármikor változtatható!**\n**-    A változtatás jogát fenttartjuk!**`)
    .setColor('BLUE')
    .setTimestamp()

    const page3 = new discord.MessageEmbed()
    .setTitle('SZABÁLYZAT')
    .setDescription('this is an example for page 3')
    .setColor('BLUE')
    .setTimestamp()


    const pages = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '30000'

    await pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'szabályzat',
    aliases: ['szab']
}
