// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = (...args) => import('parse-ms').then(({default: ms}) => ms(...args));

// module.exports = {
//   name: "pay",
//   aliases: ["give"],
//   category:'Economy',
//   description:'Give money to someone else',
  
//   run: async(client, message, args) => { 
//   let user = message.mentions.members.first() 

//   let member = db.fetch(`money_${message.author.id}`)

//   let embed1 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: Mention someone to pay`);

//   if (!user) {
//       return message.channel.send({embeds: [embed51]});
//   }
//   let embed2 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: Specify an amount to pay`);
  
//   if (!args[1]) {
//       return message.channel.send({embeds: [embed2]});
//   }

//     // if (isNaN(args[1])) return message.channel.send({embed: {
//     //                 color: 16734039,
//     //                 description: "You must enter the amount of money to pay!"
//     //             }})

//   let embed3 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: You can't pay someone negative money`);

//   if (message.content.includes('-')) { 
//       return message.channel.send({embeds: [embed3]});
//   }
//   let embed4 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: You don't have that much money`);

//   if (member < args[1]) {
//       return message.channel.send({embeds: [embed4]});
//   }

//   let embed5 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark:  You gave ${user.user.username} ${args[1]} coins`);

//   message.channel.send({embeds: [embed5]});
//   db.add(`money_${message.mentions.members.first().id}`, args[1])
//   db.subtract(`money_${message.author.id}`, args[1])

// }
// }

