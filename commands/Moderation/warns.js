const db = require('../../handlers/warns')
const { Message, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name :'warns',
    category:'Moderation',
    description:'Lists all the given warns of the user',
    usage:'<prefix>warns @person',
    /**
     * @param {Message} message
     */
    memberpermissions:['ADMINISTRATOR'],
    run : async(client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
              let boopEmbed = new Discord.MessageEmbed()
                .setTitle(`${user.user.tag}'s warns`)
                .setDescription(data.content.map((w, i) =>`\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`).join("\n"))
                .setColor("BLUE")
                message.channel.send(
                  {embeds: [boopEmbed]}
                )
            } else {
                message.channel.send('User has no data')
            }

        })
    }
}
// const db = require("quick.db");

// module.exports = {
//   name: "warnings",
//   description: "Get the warnings of yours or mentioned person",
//   category: "Moderation",
//   aliases:['warns'],
//   memberpermissions:['ADMINISTRATOR'],
//   run: (client, message, args) => {
//     const user = message.mentions.members.first() || message.author;

//     let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

//     if (warnings === null) warnings = 0;

//     message.channel.send(`${user} have **${warnings}** warning(s)`);
    
    
//   }
// };