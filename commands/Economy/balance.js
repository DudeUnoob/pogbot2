// const Discord = require("discord.js");
// const db = require("quick.db");

// module.exports = {
//   name: "balance",
//   aliases: ["bal"],
//   description:'Check your bank balance!',
//   category:'Economy',
  
//   run: async (client, message, args) => {

//   let user = message.mentions.members.first() || message.author;
  
//   let bal = db.fetch(`money_${message.author.id}`)
  
//   if (user = message.mentions.members.first()){
//     let bal = db.fetch(`money_${message.mentions.members.first().id}`)
//     if (bal === null) bal = 0;
    
//     let bank = await db.fetch(`bank_${message.mentions.members.first().id}`)

//     if (bank === null) bank = 0;

//     let personEmbed = new Discord.MessageEmbed()
//     .setColor('RANDOM')
//     .setDescription(`**${user}'s Balance**\n\nPocket: ${bal} :coin: \nBank: ${bank} :coin:`)
//     message.channel.send({embeds: [personEmbed]})
//     return;
//   }


//   if (bal === null) bal = 0;

//   let bank = await db.fetch(`bank_${message.author.id}`)
  

//   if (bank === null) bank = 0;

//   let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`**${message.author}'s Balance**\n\nPocket: ${bal} :coin: \nBank: ${bank} :coin:`);
//   message.channel.send({embeds: [moneyEmbed]});

// }
// }


