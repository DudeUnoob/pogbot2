const Schema = require('../../handlers/welcomeChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'set-channel',
  memberpermissions:['ADMINISTRATOR'],
  category:'Welcome-Channel',
  description:'Sets the welcome channel in your server',

  run: async(client, message, args) => {
    
    const channel = message.mentions.channels.first();
    if(!channel) return message.reply('Please mention a valid text channel');
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data){
          data.Channel = channel.id;
          data.save()
      } else{
        new Schema({
          Guild: message.guild.id,
          Channel: channel.id,
        }).save();
      }
      message.reply(`${channel} has been set as welcome channel`);
    })
  }
}