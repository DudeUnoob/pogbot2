const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')

module.exports = {
    name:'work',
    cooldown: 6000,
    description:'Work to earn money',

    run: async(client,message,args) => {
        const jobs = ['Programmer', 'Builder', 'Waiter', 'Youtuber', 'Streamer', 'Mechanic', 'Doctor'];

        const jobIndex = Math.floor(Math.random() * jobs.length);
        const coins = Math.floor(Math.random() * 200) + 1;

        message.channel.send(`You worked as **${jobs[jobIndex]}** and earned **${coins}** coins!`);
        client.add(message.author.id, coins);
    }
}