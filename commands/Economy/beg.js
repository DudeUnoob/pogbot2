// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = (...args) => import('parse-ms').then(({default: ms}) => ms(...args));

// module.exports = {
//   name: "beg",
//   aliases: ["dedo"],
//   category:'Economy',
//   description:'Beg for money!',
//   run: async(client, message, args) => {

//   let user = message.author;

//   let timeout = 180000;
//   let amount = 5;

//   let beg = await db.fetch(`beg_${message.author.id}`);

//     if (beg !== null && timeout - (Date.now() - beg) > 0) {
//     let time = ms(timeout - (Date.now() - beg));
  
//     let timeEmbed = new Discord.MessageEmbed()
//     .setColor(16734039)
//     .setDescription(`You've already begged recently\n\nBeg again in ${time}m`);
//      message.channel.send({embeds: [timeEmbed]});
//   } else {
//     let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark:  You've begged and received ${amount} coins | poor guy ewww`);
//    message.channel.send({embeds: [moneyEmbed]});
//   db.add(`money_${message.author.id}`, amount)
//   db.set(`beg_${message.author.id}`, Date.now())


//   }
// }}