// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = (...args) => import('parse-ms').then(({default: ms}) => ms(...args));

// module.exports = {
//   name: "deposit",
//   aliases: ["dep"],
//   category:'Economy',
//   description:'Deposit money to your bank account',
//   run: async(client, message, args) => {

//   let user = message.author;

//   let member = db.fetch(`money_${message.author.id}`)
//   let member2 = db.fetch(`bank_${message.author.id}`)

// // if(isNaN(args[0])) {
// //     let emptyEmbed = new Discord.MessageEmbed()
// //     .setColor('RANDOM')
// //     .setDescription('You must provide a number to deposit money!')
// //     message.channel.send({embeds: [emptyEmbed]});
    
// // }
	
//   if (args[0] == 'all' || args[0] == 'max') {
//     let money = await db.fetch(`money_${message.author.id}`)
//     let bank = await db.fetch(`bank_${message.author.id}`)
    
//     let embedbank = new Discord.MessageEmbed()
//     .setColor('RANDOM')
//     .setDescription(":x: You don't have any money to deposit")

//     if(money === 0) return message.channel.send({embeds: [embedbank]});

//     db.add(`bank_${message.author.id}`, money)
//     db.subtract(`money_${message.author.id}`, money)
//     let embed5 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark:  You have deposited all your coins into your bank`);
//   message.channel.send({embeds: [embed5]});
  
//   } else {
  
//   let embed2 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: Specify an amount to deposit`);
  
//   if (!args[0]) {
//       return message.channel.send({embeds: [embed2]});
      
//   }
//   let embed3 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: You can't deposit negative money`);

//   if (message.content.includes('-')) { 
//       return message.channel.send({embeds: [embed3]});
//   }
//   let embed4 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:x: You don't have that much money`);

//   if (member < args[0]) {
//       return message.channel.send({embeds: [embed4]});
//   }

//   let embed5 = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark:  You have deposited ${args[0]} coins into your bank`);

//   message.channel.send({embeds: [embed5]});
//   db.add(`bank_${message.author.id}`, args[0])
//   db.subtract(`money_${message.author.id}`, args[0])
//   }
// }
// }

