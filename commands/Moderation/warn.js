const db = require('../../handlers/warns')
const { Message, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name :'warn',
    memberpermissions:['ADMINISTRATOR'],
    category:'Moderation',
    description:'Warns the user',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        let moderator = message.author.username;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        let personEmbed = new Discord.MessageEmbed()
        .setDescription(`You have been warned for ${reason}`)
        .setColor("RED")
        
        user.send({embeds: [personEmbed]}
        )
        let embed = new Discord.MessageEmbed()
          .setDescription(`Warned ${user} for ${reason}`)
          .setColor('BLUE')
        message.channel.send({embeds: [embed]} 
        )
          client.modlogs({
          Member: user,
          Action: 'Warn',
          Color: "YELLOW",
          Reason: reason,
          Author: moderator,
        }, message)
        
    }
}

// const { MessageEmbed } = require("discord.js");
// const db = require("quick.db");

// module.exports = {
//   name: "warn",
//   category: "Moderation",
//   usage: "warn <@mention> <reason>",
//   description: "Warn anyone who do not obey the rules",
//   memberpermissions:['ADMINISTRATOR'],
//   run: async (client, message, args) => {
//     // if (!message.member.hasPermission("ADMINISTRATOR")) {
//     //   return message.channel.send(
//     //     "You should have admin perms to use this command!"
//     //   );
//     // }

//     const user = message.mentions.members.first();

//     if (!user) {
//       return message.channel.send(
//         "Please Mention the person to who you want to warn - warn @mention <reaosn>"
//       );
//     }

//     if (message.mentions.users.first().bot) {
//       return message.channel.send("You can not warn bots");
//     }

//     if (message.author.id === user.id) {
//       return message.channel.send("You can not warn yourself");
//     }

//     if (user.id === message.guild.ownerId) {
//       return message.channel.send("You can't ban the owner");
//     }

//     const reason = args.slice(1).join(" ");

//     if (!reason) {
//       return message.channel.send(
//         "Please provide reason to warn - warn @mention <reason>"
//       );
//     }

//     let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

//     if (warnings === null) {
//       db.set(`warnings_${message.guild.id}_${user.id}`, 1);
//       user.send(
//         `You have been warned in **${message.guild.name}** for ${reason}`
//       );
//       await message.channel.send(
//         `You warned **${
//           message.mentions.users.first().username
//         }** for ${reason}`
//       );
//     } else if(warnings !== null) {
      
//       db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
//       user.send(`You have been warned in **${message.guild.name}** for ${reason}`);
      
//       await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`);
      
//       message.delete
      
//     }
//   }
// };