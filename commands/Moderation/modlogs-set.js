const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require("../../handlers/modlogs");

module.exports = {
  name: "set-logs",
  memberpermissions:['ADMINISTRATOR'],
  description:'Sets the modlog channel in the server',


  run: async(client, message, args) => {
    const channel = message.mentions.channels.first() || message.channel;

    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) data.delete();
      new Schema({
        Guild: message.guild.id,
        Channel: channel.id,
      }).save();
      message.channel.send(`${channel} has been saved as the modlogs channel!`)
    })

  }  
}