const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   description:'Locks a channel in the current channel your in or vc',
   category:'Moderation',
   memberpermissions:['MANAGE_SERVER'],
   run: async(client, message, args) => {

   let moderator = message.member;
   const reason = args.slice(0).join(" ") || "No reason provided";
   message.channel.permissionOverwrites.set([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send({embeds: [embed]});
   message.delete();

   client.modlogs({
     Author: moderator,
     Reason: reason,
     Color: 'RED',
     Action: 'Locked channel',
      Member: moderator
   },message)
}
}