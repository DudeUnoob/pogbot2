// const { MessageEmbed } = require('discord.js');

// const db = require('quick.db');

// module.exports = {
//     name: 'inventory',
//     category: "Economy",
//     description: "View Your Inventory",
//     aliases: ['inv'],
//     usage: "inventory",
//     run: async(client, message, args) => {

//       let user = message.mentions.members.first() || message.author;

// let nikes = db.fetch(`nikes_${message.author.id}`)
// let car = db.fetch(`car_${message.author.id}`)
// let mansion = db.fetch(`house_${message.author.id}`)

// if(user = message.mentions.members.first()){
//   let nikes = db.fetch(`nikes_${message.mentions.members.first().id}`)
//   let car = db.fetch(`car_${message.mentions.members.first().id}`)
//   let mansion = db.fetch(`house_${message.mentions.members.first().id}`)

//   if (nikes === null){
//     nikes = 0
//   }
//   if(car === null){
//     car = 0
//   }
//   if(mansion === null){
//     mansion = 0
//   }

//    const personEmbed = new MessageEmbed()
//         .setTitle(`${message.mentions.users.first().username}'s inventory`)
//         .setColor("BLUE")
//         .addFields(
//             { name: 'Nikes', value: nikes.toString() + ' 👟'},
//             { name: 'Car', value: car.toString() + ' 🚗'},
//             { name: 'Mansion', value: mansion.toString() + ' 🏠'},
//         )

//         message.channel.send({embeds:[personEmbed]})
//         return;

// }

// if(nikes === null){
//   nikes = 0
// }
// if(car === null){
//   car = 0
// }
// if(mansion === null){
//   mansion = 0
// }

//         const userEmbed = new MessageEmbed()
//         .setTitle(`${message.author.username}'s Inventory`)
//         .setColor("BLUE")
//         .addFields(
//             { name: 'Nikes', value: nikes.toString() + ' 👟'},
//             { name: 'Car', value: car.toString() + ' 🚗'},
//             { name: 'Mansion', value: mansion.toString() + ' 🏠'},
//         )

//         message.channel.send({embeds:[userEmbed]})
      
//       //   let user = message.author;
        
//       //   let nikes = db.fetch(`nikes_${user.id}`)
//       //   let car = db.fetch(`car_${user.id}`)
//       //   let mansion = db.fetch(`house_${user.id}`)

//       //   if(nikes === null){
//       //     nikes = 0
//       //   }

//       //   if(car === null){
//       //     car = 0
//       //   }

//       //   if(mansion === null){
//       //     mansion = 0
//       //   }



        

//       //   const userEmbed = new MessageEmbed()
//       //   .setTitle(`${user.username}'s Inventory`)
//       //   .setColor("BLUE")
//       //   .addFields(
//       //       { name: 'Nikes', value: nikes.toString() + ' 👟'},
//       //       { name: 'Car', value: car.toString() + ' 🚗'},
//       //       { name: 'Mansion', value: mansion.toString() + ' 🏠'},
//       //   )

//       //   message.channel.send({embeds:[userEmbed]})

      

//       // let person = message.mentions.members.first()

//       //   let nikes1 = db.fetch(`nikes_${person.id}`)
//       //   let car1 = db.fetch(`car_${person.id}`)
//       //   let mansion1 = db.fetch(`house_${person.id}`)

//       //   if(nikes1 === null){
//       //     nikes1 = 0
//       //   }

//       //   if(car1 === null){
//       //     car1 = 0
//       //   }

//       //   if (mansion1 === null){
//       //     mansion1 = 0
//       //   }

//       //           const personEmbed = new MessageEmbed()
//       //   .setTitle(`${person}'s inventory`)
//       //   .setColor("BLUE")
//       //   .addFields(
//       //       { name: 'Nikes', value: nikes1.toString() + ' 👟'},
//       //       { name: 'Car', value: car1.toString() + ' 🚗'},
//       //       { name: 'Mansion', value: mansion1.toString() + ' 🏠'},
//       //   )

//       //   message.channel.send({embeds:[personEmbed]})
      

        
//     }
// }






  
