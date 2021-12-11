const db = require('../../handlers/warns')

module.exports = {
    name : 'clear-warns',
    aliases:['remove-all-warns'],
    category:'Moderation',
    description:'Clears all the users warns',
    memberpermissions:['ADMINISTRATOR'],
        run : async(client, message, args) => {
        let moderator = message.author.username;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const reason = args.slice(1).join(" ") || "No reason provided";
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`Cleared ${user.user.tag}'s warns`)
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
        client.modlogs({
          Member: user,
          Action: 'Clear Warns',
          Color: "GREEN",
          Reason: reason,
          Author: moderator,
        }, message)
    }
}