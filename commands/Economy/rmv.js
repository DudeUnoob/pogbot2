const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'rmv',

    run: async(client,message,args) => {
        const member = message.mentions.members.first() || message.member;
        client.rmv(member.id, parseInt(args[0]) );

        message.channel.send('Removed balance')
    }
}