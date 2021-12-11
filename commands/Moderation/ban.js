const Schema = require('../../handlers/modlogs')
module.exports = {
    name:'ban',
    description:'Ban\'s a member',
    memberpermissions: ["BAN_MEMBERS"],
    usage:'<prefix>ban <userid> <reason>',
    category:'Moderation',
    run: async (client,message,args)=> {
         let moderator = message.author.username;
         const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
        if(!member) return message.reply("Please mention the member's id to ban");

        const reason = args.slice(1).join(" ") || "No reason provided";

        member.ban({ reason });
        client.modlogs({
          Member: member,
          Action: 'Ban',
          Color: "RED",
          Reason: reason,
          Author: moderator,
        }, message)
        message.channel.send(`Banned ${member} for ${reason}`)
        // if(member){
        //     const memberTarget = message.guild.members.cache.get(member.id);
        //     memberTarget.ban();
        //     client.modlogs()
        //     message.channel.send("User has been banned");
        // }
        // else{
        //     message.channel.send('You couldn\'t ban that member');
        // }
      
    }
}