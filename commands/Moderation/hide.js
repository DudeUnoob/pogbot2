const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "hide",
  aliases: [],
  description:'Hides the current channel',
  category:'Moderation',
  memberpermissions:['MANAGE_GUILD'],
  run: async(client, message, args) => {
    
     let embed = db.fetch(`embed_${message.guild.id}`);
     const reason = args.slice(1).join(" ")
      let moderator = message.member;
    
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "$";
    }
   message.channel.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
message.channel.send("Done i have Hidden this channel now :thumbsup:")

    client.modlogs({
      Member: moderator,
      Color: 'ORANGE',
      Reason: reason,
      Author: moderator,
      Action: 'Hide Channel',
    }, message)
}}
