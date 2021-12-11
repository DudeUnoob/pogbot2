  module.exports = {
  name: "unlock",
  aliases: [],
  description:'unlocks a channel that has been locked',
  category:'Moderation',
  run: async(client, message, args) => {
  
   let moderator = message.member;
   const reason = args.slice(0).join(" ") || "No reason provided";
  

  let channel = message.channel;

   const vc1 = args.join(" ");
   channel.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     allow: ['SEND_MESSAGES'],
  },
], 'unLockdown');
        message.channel.send("This Channel has been unlocked enjoy.")
        client.modlogs({
          Author: moderator,
          Color: 'GREEN',
          Member: moderator,
          Reason: reason,
          Action: 'Unlocked Channel',
        },message)
  }
    }
