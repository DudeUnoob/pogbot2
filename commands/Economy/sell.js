// const Discord = require('discord.js');
// const db = require('quick.db')


// module.exports = {

// 		name: "sell",
// 		description: "Sell something you dont use/want!",
// 		category: "Economy",


// run: async (client, message, args) => {
    
//     let user = message.author;

//     if(args[0].toLowerCase() == 'nikes') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`❌ You don't have Nikes to sell`);

//         let nikeses = await db.fetch(`nikes_${user.id}`)

//         if (nikeses < 1) return message.channel.send({embeds:[Embed2]})
       
//         await db.fetch(`nikes_${user.id}`)
//         await db.subtract(`nikes_${user.id}`, 1)

//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`✅ Sold Fresh Nikes For 400 Coins`);

//         await db.add(`money_${user.id}`, 400)
//         message.channel.send({embeds:[Embed3]})
//     } else if(args[0].toLowerCase() == 'car') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`❌ You don't have a Car to sell`);

//        let cars = await db.fetch(`car_${user.id}`)

//         if (cars < 1) return message.channel.send({embeds:[Embed2]})
       
//         await db.fetch(`car_${user.id}`)
//         await db.subtract(`car_${user.id}`, 1)

//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`✅ Sold a Car For 600 Coins`);

//         await db.add(`money_${user.id}`, 600)
//         message.channel.send({embeds:[Embed3]})
//     } else if(args[0].toLowerCase() == 'mansion') {
//         let Embed2 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`❌ You don't have a Mansion to sell`);

//         let houses = await db.fetch(`house_${user.id}`)

//         if (houses < 1) return message.channel.send({embeds:[Embed2]})
       
//         await db.fetch(`house_${user.id}`)
//         await db.subtract(`house_${user.id}`, 1)

//         let Embed3 = new Discord.MessageEmbed()
//         .setColor("#FFFFFF")
//         .setDescription(`✅ Sold a Mansion For 1000 Coins`);

//         await db.add(`money_${user.id}`, 1000)
//         message.channel.send({embeds:[Embed3]})
// 		};

// 	}
// }