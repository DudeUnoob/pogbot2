const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')

module.exports = {
    name:'monthly',
    cooldown: 2629746,
    description:'Get your monthly money',

    run: async(client,message,args) => {
        const coins = Math.floor(Math.random() * 2000) + 1;

        message.channel.send(`You received **${coins}** coins today! claim it again next month!`);
        client.add(message.author.id, coins);
    }
}
// const Discord = require("discord.js");
// const db = require("quick.db");
// const ms = require('ms');

//     module.exports = {
//   name: "monthly",
//   aliases: [],
//   run: async(client, message, args) => {

//   let user = message.author;
//   let timeout = 2592000000;
//   let amount = 2000;
    
//   let monthly = await db.fetch(`monthly_${message.author.id}`);

//   if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
//     let time = ms(timeout - (Date.now() - monthly));
  
//     let timeEmbed = new Discord.MessageEmbed()
//     .setColor(16734039)
//     .setDescription(`:x: You have already collected your monthly reward\n\nCollect it again in ${time}`);
//     message.channel.send({embeds:[timeEmbed]})
//   } else {
//     let moneyEmbed = new Discord.MessageEmbed()
//   .setColor("RANDOM")
//   .setDescription(`:white_check_mark: You've collected your monthly reward of ${amount} coins`);
//   message.channel.send({embeds:[moneyEmbed]})
//   db.add(`money_${message.author.id}`, amount)
//   db.set(`monthly_${message.author.id}`, Date.now())


//   }
// }}


