const Discord = module.require("discord.js");
const simplydjs = require("simply-djs")

module.exports = {
  name: "calculator",
  description: "calculates.",
  category: 'Info',
  aliases:['calc'],
   run: async (client, message,args) => {
    simplydjs.calculator(message, {
    embedColor: '#075FFF',
    credit: false
    })
  }
};