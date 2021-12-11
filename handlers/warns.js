const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

let Schema = new mongoose.Schema({
  guildId: String, 
  user: String,
  content: Array
})

module.exports = mongoose.model('warns', Schema)