// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = require('ms');

//     module.exports = {
//   name: "monthly",
//   aliases: [],
//   premium: true,
//   category:'Premium',
//   description:'Get your monthly amount of coins!',
//   run: async(client, message, args) => {

//   let user = message.author;
//     let premiumNow = db.get(`premium_${user.id}`)

//     if(premiumNow === false) {
//       return message.channel.send("You don't have premium LOL")
//     }

//     if(premiumNow === true){
//   let timeout = 2592000000;
//   let amount = 2000;
    
//   let monthly = await db.fetch(`monthly_${message.author.id}`);

//   if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
//     let time = ms(timeout - (Date.now() - monthly));
  
//     let timeEmbed = new Discord.MessageEmbed()
//     .setColor(16734039)
//     .setDescription(`:x: You have already collected your monthly reward\n\nCollect it again in ${time}`);
//     message.channel.send({embeds:[timeEmbed]})
//   } else {
//     let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark: You've collected your monthly reward of ${amount} coins`);
//   message.channel.send({embeds:[moneyEmbed]})
//   db.add(`money_${message.author.id}`, amount)
//   db.set(`monthly_${message.author.id}`, Date.now())

//       }
//     }
//   }
// }


