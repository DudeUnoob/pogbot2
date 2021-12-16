const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    name: 'bal',
    aliases:['balance'],
    description:'Check your money balance',
    category:'Economy',
    

    run: async(client,message,args) => {
        
        const member = message.mentions.members.first() || message.member;
        
        const bal = await client.bal(member.id);

        let balEmbed = new Discord.MessageEmbed()
        .setDescription(bal + " :coin:")
        message.channel.send({embeds: [balEmbed]});
    }
}