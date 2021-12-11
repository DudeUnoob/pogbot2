const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "done",
  aliases: ["nikal"],
  category:'Ticket',
  memberpermissions:['MANAGE_SERVER'],
  run: async(client, message, args) => {
    
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "$";
    }

if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('<a:no:876439250965508146> | you cannot use this command here. Please use this command when you want to delete a ticket.');
		}

}
}
