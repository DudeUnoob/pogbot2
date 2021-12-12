// const Discord = require('discord.js')
// const db = require('quick.db')


// module.exports = {
//   name: "buy",
//   aliases: [],
//   category:'Economy',
//   description:'Purchase something from the shop',
//   usage: "<prefix>buy list",
//   run: async(client, message, args) => {
//  var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
//     if(!prefix)
//     {
//       var prefix = "$";
//     }
//     let user = message.author;
// let userpremiumdata = {
//     userid: message.guild.id,
//     premiumer: message.author.id,
//     premiumcode: "yes"
//    }
//     let alreadypremium = new Discord.MessageEmbed()
// .setTitle(`You're Already an premium user`)
//  let checking = db.get(`premium`)
//     let author = db.fetch(`money_${message.author.id}`)

//     let Embed = new Discord.MessageEmbed()
//     .setColor("FF5757")
//     .setDescription(`:cross: You need 2000 coins to purchase Bronze VIP`);


//     if (args[0] == 'bronze') {
//         if (author < 3500) message.channel.send({embeds: [Embed]});
        
//         db.fetch(`bronze_${message.author.id}`);
//         db.set(`bronze_${message.author.id}`, true)

//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("RANDOM")
//         .setDescription(`:white_check_mark:  Purchased Bronze VIP For 3500 Coins`);

//         db.subtract(`money_${message.author.id}`, 3500)
//         message.channel.send({embeds: [Embed2]});
//     } else if(args[0] == 'nikes') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("FF5757")
//         .setDescription(`You need 600 coins to purchase some Nikes`);

//         if (author < 600) return message.channel.send({embeds: [Embed2]});
       
//        let dollars = db.fetch(`money_${message.author.id}`)
//         db.fetch(`nikes_${message.author.id}`)
//         db.add(`nikes_${message.author.id}`, 1)

        

//         db.subtract(`money_${message.author.id}`, 600)
//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("RANDOM")
//         .setDescription(`:white_check_mark:  Purchased Fresh Nikes For 600 Coins, you now have ${db.fetch(`money_${message.author.id}`)} :coin:`);
//         message.channel.send({embeds: [Embed3]});
//     } else if(args[0] == 'car') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("FF5757")
//         .setDescription(`You need 800 coins to purchase a new car you poor guy do ,beg to earn some coins`);

//         if (author < 800) return message.channel.send({embeds: [Embed2]});
       
//         db.fetch(`car_${message.author.id}`)
//         db.add(`car_${message.author.id}`, 1)
//         let dollars = db.fetch(`money_${message.author.id}`)
        

//         db.subtract(`money_${message.author.id}`, 800)
//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("RANDOM")
//         .setDescription(`:white_check_mark:  Purchased a New Car For 800 Coins, you now have ${db.fetch(`money_${message.author.id}`)} :coin:`);
//         message.channel.send({embeds: [Embed3]});
//     } else if(args[0] == 'mansion') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("FF5757")
//         .setDescription(` You need 1200 coins to purchase a Mansion`);

//         if (author < 1200) return message.channel.send({embeds: [Embed2]});
       
//         db.fetch(`house_${message.author.id}`)
//         db.add(`house_${message.author.id}`, 1)
//         let dollars = db.fetch(`money_${message.author.id}`)

        

//         db.subtract(`money_${message.author.id}`, 1200)
//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("RANDOM")
//         .setDescription(`:white_check_mark: Purchased a Mansion For 1200 Coins, you now have ${db.fetch(`money_${message.author.id}`)} :coin:`);
//         message.channel.send({embeds: [Embed3]});
		
// 	} else if(args[0] == 'list') {
// 	let list = new Discord.MessageEmbed()
//         .setColor("RANDOM")
//         .setTitle("List of all items you have to buy:")
//      	.addField("Bronze", "Cost: 3500 coins")
// 		.addField("Nikes", "Cost: 600 coins")
// 		.addField("Car", "Cost: 800 coins")
// 		.addField("Mansion", "Cost: 1200 coins")
//     .addField("7 Days Premium", "Cost: 3000 coins")
//       .addField("15 Days Premium", "Cost: 6500 coins")
//         .addField("30 Days Premium", "Cost: 10,000 coins")
// 		message.channel.send({embeds: [list]});
   
    
      
      
      
//       } else {
//         let embed3 = new Discord.MessageEmbed()
//         .setColor("FF5757")
//         .setTitle(`Enter an item to buy, type ${prefix}buy list to show all things`)
//         message.channel.send({embeds: [embed3]});
//     }

// }
// }


// // const { MessageEmbed } = require("discord.js");
// // const db = require('quick.db');

// // module.exports = {
// //     name: 'buy',
// //     description: "Buy Items from the Shop!",
// //     aliases: [],
// //     category: "Economy",
// //     usage: "buy [item]",
    
// //     run: async(client, message, args) => {
    
// //         let purchase = args.join(" ")
// //         let cash = await db.fetch(`money_${message.author.id}`)

// //         if(!purchase) {
// //             const buyError = new MessageEmbed()
// //             .setDescription("You Need to Provide An Item Yo want To Purchase!")
// //             .setColor("BLUE")

// //             return message.channel.send({embeds:[buyError]});
// //         }
// //         let items = await db.fetch(`items_${message.author.id}`, {items: []})

// //         if(purchase == 'Thief Outfit') {
// //             if(cash < 300) {
// //                 const purchaseError = new MessageEmbed()
// //                 .setDescription("You Don\'t Have Enough Money To Buy A Thief Outfit!")
// //                 .setColor("BLUE")

// //                 return message.channel.send({embeds:[purchaseError]})
// //             }

// //             db.subtract(`money_${message.author.id}`, 300)
// //             db.push(`items_${message.author.id}`, "Thief Outfit")

// //             const purchaseThiefOutfitSuccess = new MessageEmbed()
// //             .setDescription(`Successfuly Bought One Thief Outfit For 300`)
// //             .setColor("BLACK")

// //             message.channel.send({embeds: [purchaseThiefOutfitSuccess]})
           
// //         }
            
// //             if(purchase == 'Gift Box') {
// //             if(cash < 1200) {
// //                 const purchaseError8 = new MessageEmbed()
// //                 .setDescription("You Don\'t Have Enough Money To Buy A Gift Box")
// //                 .setColor("BLUE")

// //                 return message.channel.send({embeds:[purchaseError8]})
// //             }
            
// //             db.subtract(`money_${message.author.id}`, 1200)
// //             db.push(`items_${message.author.id}`, 'Gift Box')

// //             const purchaseGiftBoxSuccess = new MessageEmbed()
// //             .setDescription(`Successfuly Bought One Gift Box For 1200<:Coin:859014238353620993>`)
// //             .setColor("BLACK")

// //             message.channel.send({embeds: [purchaseGiftBoxSuccess]})
            
// //         }
// //     }
// // }