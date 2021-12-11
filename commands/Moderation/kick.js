
module.exports = {
    name:'kick',
    description:'Kick\'s a member',
    memberpermissions:["KICK_MEMEBERS"],
    category:'Moderation',
    usage:'kick',
    run: async(client,message,args) => {
         let moderator = message.author.username;
         const member =  message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
        
        if(!member) return message.reply("Please mention the member's id to kick");

        const reason = args.slice(1).join(" ") || "No reason provided";

        member.kick({ reason });
        client.modlogs({
          Member: member,
          Action: 'Kick',
          Color: "RED",
          Reason: reason,
          Author: moderator,
        }, message)
        message.channel.send(`Kicked ${member} for ${reason}`)
      
    }
}