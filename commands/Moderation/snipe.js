const { Message, Client, MessageEmbed } = require('discord.js')
const moment = require('moment');
const Discord = require('discord.js');


module.exports = {
  name: 'snipe',
  description:'Brings messages that were recently deleted, up to 5',
  category:'Moderation',
  run: async(client,message,args) => {
    
    const snipes = client.snipes.get(message.channel.id);
    if(!snipes) return message.reply('There are no deleted messages in this channel');

    const snipe = +args[0] - 1 || 0;
    const target = snipes[snipe];
    if(!target) return message.reply(`There is only ${snipes.length} messages!`)

    const {msg, time, image} = target;
    let embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setImage(image)
    .setFooter(`${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}`)
    .setDescription(msg.content)
    .setColor("RANDOM")
    message.channel.send(
      {embeds: [embed]}
    )
  }
}