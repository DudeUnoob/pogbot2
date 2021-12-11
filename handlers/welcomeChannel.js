const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

const Schema = new mongoose.Schema({
  Guild: String,
  Channel: String,
});

module.exports =  mongoose.model('welcome-channel', Schema);