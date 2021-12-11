const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));

module.exports = mongoose.model(
  "premium",
  new mongoose.Schema({
    User: String,
  })
);




