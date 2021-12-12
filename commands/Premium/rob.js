// const db = require('quick.db');
// const ms = require('ms');
// const settings = require("../../botconfig/settings.json");

// const { MessageEmbed } = require("discord.js");


// module.exports = {
//     name: 'rob',
//     category: "Premium",
//     premium: true,
//     description: "Rob someone if they have Cash!",
//     usage: "rob <mention>",
    
//     run: async(client, message, args) => {
        
//         let timeout = 120000;
//         let user = message.mentions.users.first()
//         let cash = db.fetch(`money_${message.author.id}`)

//         let robbedCash = db.fetch(`robbedCash_${message.author.id}`)

//         // if(!db.has(`items_${message.author.id}`, 'Thief Outfit')) {
//         //     const embed = new MessageEmbed()
//         //     .setDescription("You Don\'t Have a Thief Outfit, Make Sure You Buy One From The Store!")
//         //     .setColor("BLUE")

//         //     return message.channel.send(embed)
//         // }

//         if(!user) {
//             const robError = new MessageEmbed()
//             .setDescription("You Need To Mention Someone To Rob!")
//             .setColor("BLUE")

//             return message.channel.send({embeds: [robError]})
//         }
//         if(message.author === user) {
//             const embed2 = new MessageEmbed()
//             .setDescription("You Cannot Rob Yourself! Lmao.")
//             .setColor("BLUE")

//             return message.channel.send({embeds: [embed2]})
//         }

        
//         let memberCash = db.fetch(`money_${user.id}`)

//         if(memberCash == null || 0) {
//             robErr = new MessageEmbed()
//             .setDescription(`Sadly, ${user} Does Not Have Any Cash On them!\n**Better Try It On Other User Now xD**`)
//             .setColor("RED")

//             db.set(`robbedCash_${message.author.id}`, Date.now())
//             return message.channel.send({embeds: [robErr]})
            
            
//         }

//         if(memberCash < 200){
//           message.channel.send('Sorry, that person needs at least 200 coins to be robbed')

//           return;
//         }

//         if(cash < 200){
//           message.channel.send('Sorry, you need at least 200 coins to rob')

//           return;
//         }
        
//         if(robbedCash !== null && timeout - (Date.now() - robbedCash) > 0) {
//             let time = ms(timeout - (Date.now() - robbedCash))

//             const robEmbed = new MessageEmbed()
//             .setDescription(`You Cannot Rob Someone For Another **${time}**`)
//             .setColor("BLUE")

//             return message.channel.send({embeds: [robEmbed]})
//         }

//         let amount = Math.floor(Math.random() * memberCash) + 1
//         db.subtract(`money_${user.id}`, amount)
//         //db.delete(`items_${message.author.id}`, 'Thief Outfit')
//         //db.add(`money_${message.author.id}`, amount)
//         db.set(`robbedCash_${message.author.id}`, Date.now())
//         db.add(`money_${message.author.id}`, amount)

//         const robSuccess = new MessageEmbed()
//         .setDescription(`You Robbed ${amount} From ${user}`)

//         .setColor("YELLOW")

//         message.channel.send({embeds: [robSuccess]})


//     }
// }
