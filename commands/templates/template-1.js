const Discord = require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `:x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Adminisztrátor\`)`
      );
    if (!args[0]) {
      message.channel.send(
        `:ok_hand: Ha szeretnéd, hogy létrehozzam ezeket a csatornákat, kérlek írd be **${prefix}template1 igen** parancsot!`
      );
      message.channel.send({ files: ["https://i.imgur.com/OEK5RYT.png"] });
    }
    if (args[0] == "igen") {
      message.guild.channels.cache.forEach(channel => channel.delete());
      /////////////////////////////////////////////////////////////////////////////////////
      message.guild.channels.create("》📰 Információk 📰《", {
        type: "category"
      });
      message.guild.channels
        .create(`》👋-belépők-kilépők-👋《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      message.guild.channels
        .create(`》📰-hírek-📰《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      message.guild.channels
        .create(`》🚫-szabályok-🚫《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      message.guild.channels
        .create(`》📌-bejelentések-📌《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      message.guild.channels
        .create(`》🙋-partnerek-🙋《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      message.guild.channels
        .create(`》🎉-nyereményjátékok-🎉《`, {
          type: "text"
        })
        .then(channel => {
          let category = message.guild.channels.cache.find(
            c => c.name == "》📰 Információk 📰《" && c.type == "category"
          );
          channel.setParent(category.id);
        });
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////////////////////
      setTimeout(function() {
        message.guild.channels.create("》💬 Általános 💬《", {
          type: "category"
        });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》💬-chat-💬《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》💬 Általános 💬《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》🤖-bot-parancsok-🤖《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》💬 Általános 💬《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》🐵-képek-mémek-🐵《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》💬 Általános 💬《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》❓-segítségkérő-❓《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》💬 Általános 💬《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》🗣 Társalgó 🗣《`, {
            type: "voice"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》💬 Általános 💬《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      setTimeout(function() {
        message.guild.channels.create("》🛑 Admin Team 🛑《", {
          type: "category"
        });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》💬-chat-💬《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》🛑 Admin Team 🛑《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》📰-log-📰《`, {
            type: "text"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》🛑 Admin Team 🛑《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      setTimeout(function() {
        message.guild.channels
          .create(`》🗣 Társalgó 🗣《`, {
            type: "voice"
          })
          .then(channel => {
            let category = message.guild.channels.cache.find(
              c => c.name == "》🛑 Admin Team 🛑《" && c.type == "category"
            );
            channel.setParent(category.id);
          });
      }, 1000);
      message.author.send(
        `:white_check_mark: A template sikeresen betöltve, jó szórakozást, ha roletemplate is kellene, használd a **${prefix}roletemplate1** parancsot!\n :exclamation: Figyelem! Sok template generálás után csatornák beragadhatnak, amit nem lehet kitörölni, se manuálisan, se bottal! Ezek a csatornák egy idő után törlődnek!`
      );
    }
  }

  module.exports.help = {
      name: 'template1',
      aliases: []
  }
