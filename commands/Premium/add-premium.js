const premiumSchema = require('../../handlers/premium')
const { Client, Message, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');

module.exports = {
  name: 'add-premium',
  

  run: async(client,message,args) => {
    if(message.author.id !== '432605411049209867') return;



    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!member){
      return message.reply('Please specify a valid member!')
    }

    premiumSchema.findOne({
      User: member.id
    },async(err, data) => {
      if(data) return message.reply("This user has already gained premium features")

      new premiumSchema({
        User: member.id
      }).save();
          return message.reply(`Added ${member} to the database!`)
    })
  }
}




