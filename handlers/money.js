const { mongooseConnectionString } = require('../botconfig/config.json')

const mongoose = require('mongoose');
mongoose.connect(mongooseConnectionString)

module.exports = mongoose.model(
    'Money',
    new mongoose.Schema({
        id: String,
        coins: Number
    })
);