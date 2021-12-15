const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const client = require('../../index')

module.exports = {
    name: 'econleaderboard',
    description: 'Shows the leaderboard on most money in your server!',
    aliases:['moneyleaderboard','e-leaderboard'],

    run: async(client,message,args) => {
        
        const collection = new Collection();

        await Promise.all(
            message.guild.members.cache.map(async(member) => {
                const id = member.id;
                const bal = await client.bal(id);
                console.log(`${member.user.tag} -> ${bal}`)
                return bal !== 0 ? collection.set(id, {
                    id,
                    bal,
                })
                : null  
            })
        );

        const data = collection.sort((a, b) => b.bal - a.bal).first(10);

        const embed = new MessageEmbed()
        .setTitle(`Leaderboard in ${message.guild.name}`)
        .setDescription(
            data.map((v, i) => {
                return `${i+1} ${client.users.cache.get(v.id).tag} => **${v.bal} :coin:**`
            })
            .join("\n"))
        message.channel.send(
            {embeds: [embed]}
        )
    }
}