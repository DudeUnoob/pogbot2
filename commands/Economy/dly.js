const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')

module.exports = {
    name:'daily',
    cooldown: 86400,
    description:'Get you daily money',

    run: async(client,message,args) => {
        const coins = Math.floor(Math.random() * 2000) + 1;

        message.channel.send(`You received **${coins}** coins today! claim it again tomorrow!`);
        client.add(message.author.id, coins);
    }
}