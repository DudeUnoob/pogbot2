// const Discord = require('discord.js');
// const db = require('quick.db')
// module.exports = {
//   name: "addmoney",
//   premium: true,
//   category:'Premium',
//   aliases: ["addm"],
//   memberpermissions:['ADMINISTRATOR'],
//   run: async(client, message, args) => {
//       var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
//     if(!prefix)
//     {
//       var prefix = "$";
//     }


//   let user = message.mentions.members.first();

// if (!user) {
//   let embed = new Discord.MessageEmbed()
// .setColor('RANDOM')
// .setDescription('You must mention someone to add money!')

// message.channel.send({embeds: [embed]});
// }
//     if (isNaN(args[1])){
//       let embed1 = new Discord.MessageEmbed()
// .setColor('RANDOM')
// .setDescription('You must enter the amount of money to add!')

// message.channel.send({embeds: [embed1]});
//     }
//                 if(args[0] >= 20000)
//                 {
//    message.reply("You cant add amount this much more")
//    return;
//                 }

//     db.add(`money_${message.mentions.members.first().id}`, args[1])
//     let bal = await db.fetch(`money_${message.mentions.members.first().id}`)

//     let moneyEmbed = new Discord.MessageEmbed()
//     .setColor("RANDOM")
//     .setDescription(`:white_check_mark: Added ${args[1]} coins\n\nNew Balance: ${bal}`);
//     message.channel.send({embeds: [moneyEmbed]});

// }
// }

