const Discord = module.require("discord.js");
const simplydjs = require("simply-djs")

module.exports = {
  name: "ttt",
  description: "Tic Tac Toe in discord!",
  category:'Fun',
  usage:'ttt',
  run: async  (client, message,  args) => {
    simplydjs.tictactoe(message, {
    embedColor: '#075FFF',
    credit: false,
    embedFoot:'Play Tic Tac Toe'
    })
    
  }
};