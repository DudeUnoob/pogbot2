// const db = require('quick.db')
// const OWNER_ID = '432605411049209867'
// module.exports = {
//   name:'remove-premium',


//     run: async(client,message,args) => {

//     if(message.author.id != OWNER_ID){
//         return message.channel.send('Only the owner Dom K#0370 has access to this command, premium commands/systems are under development and will become global in the future thank you!')
//     }
//     member = message.mentions.members.first()


//    let premiumNow = db.set(`premium_${member.id}`,false)



//     message.channel.send("The member doesn't have premium now")
//     }

// }
const premiumSchema = require('../../handlers/premium')
const { Client, Message, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
  name: 'remove-premium',

  run: async(client,message,args) => {
    if(message.author.id !== '432605411049209867') return;

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!member){
      return message.reply('Please specify a valid member!')
    }

    premiumSchema.findOne({
      User: member.id
    },async(err, data) => {
        if(!data) return message.reply('User was previously not added to database!');


        data.delete(); 
        message.channel.send('Removed user from database');
      }
    )
  }
}