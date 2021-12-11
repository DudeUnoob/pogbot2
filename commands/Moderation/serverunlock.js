const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  name: "serverunlock",
  aliases: [],
  category:'Moderation',
  description:'unlocks the server: text, vc, all',
  usage:'<pfx>serverunlock text, <pfx>serverunlock vc, <pfx>serverunlock all',
  
  run: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "$";
    }
      if(!content)
    {
      message.channel.send(`You didnt gave me an text or vc option e.g - ${prefix}serverunlock text/vc/all`);
      return;
    }
    if (content.toLowerCase() === "text") 
    {
      message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "text")
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     allow: ['SEND_MESSAGES'],
  },
], `${message.member.id} Told to unlock the server`);
}) 
message.channel.send(`Done i have unLocked the all text Channels which are in server`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unLocked the all voice Channels which were in server`)
    }
    if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unLocked the all voice  AND TEXT Channels which were in server`)
    }
      if (content.toLowerCase() === "unhide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.permissionOverwrites.set([
  {
     id: message.guild.roles.everyone.id,
     allow: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unhidden the all voice  AND TEXT Channels which were in server`)
    }
}
}
