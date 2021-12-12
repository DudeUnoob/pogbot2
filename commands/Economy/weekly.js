// const Discord = require("discord.js");
// const db = require("quick.db");
// //const ms = (...args) => import('parse-ms').then(({default: ms}) => ms(...args));
// const ms = require('ms')

//     module.exports = {
//   name: "weekly",
//   aliases: [],
//   category:'Economy',
//   description:'Get your weekly money!',
  
//   run: async(client, message, args) => {

//   let user = message.author;
//   let timeout = 604800000;
//   let amount = 500;
    
     
//   let weekly = await db.fetch(`weekly_${message.author.id}`);

//   if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
//     let time = ms(timeout - (Date.now() - weekly));
  
//     let timeEmbed = new Discord.MessageEmbed()
//     .setColor(16734039)
//     .setDescription(`:x: You have already collected your weekly reward\n\nCollect it again in ${time} `);
//     message.channel.send({embeds: [timeEmbed]});
//   } else {
//     let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark: You've collected your weekly reward of ${amount} coins`);
//   message.channel.send({embeds: [moneyEmbed]});
//   db.add(`money_${message.author.id}`, amount)
//   db.set(`weekly_${message.author.id}`, Date.now())


//   }
// }}


