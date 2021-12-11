const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    memberpermissions:['MANAGE_ROLES'],
    usage:'$unmute <member>',
    description:'Unmutes the member',
    category:'Moderation',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        let moderator = message.author.username;
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')
        const reason = args.slice(1).join(" ") || "No reason provided";

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)
        client.modlogs({
          Member: Member,
          Action: 'Unmuted',
          Color: "GREEN",
          Reason: reason,
          Author: moderator,
         // Reason: reason,
        }, message)
    }
}