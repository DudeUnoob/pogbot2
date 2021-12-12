const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')

module.exports = {
    name: 'rmv',
    description:'Remove money from a specified member',
    category:'Economy',
    memberpermissions:['ADMINISTRATOR'],

    run: async(client,message,args) => {
        const member = message.mentions.members.first() || message.member;
        client.rmv(member.id, parseInt(args[0]) );

        message.channel.send('Removed balance')
    }
}