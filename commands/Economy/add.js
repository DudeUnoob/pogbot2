const { Client, Message, MessageEmbed } = require('discord.js');
const client = require('../../index')

module.exports = {
    name: 'addmoney',
    memberpermissions:['ADMINISTRATOR'],

    run: async(client,message,args) => {
        const member = message.mentions.members.first() || message.member;
        client.add(member.id, parseInt(args[0]));

        message.channel.send('Added balance')
    }
}