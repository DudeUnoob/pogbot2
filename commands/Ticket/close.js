// /* eslint-disable no-unused-vars */
// const sourcebin = require('sourcebin_js');
// const { MessageEmbed } = require('discord.js');

// module.exports = {
// 	name: 'close',
// 	category: 'Ticket',
// 	description: 'Closes the ticket.',
// 	aliases: [],
// 	usage: 'close',
// 	run: async (client, message, args) => {
// 		if(message.channel.name.includes('ticket-')) {
// 			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
// 			if(message.channel.name === `ticket-${message.author.id}`) {
// 				message.channel.messages.fetch().then(async (messages) => {
// 					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

// 					let response;
// 					try {
// 						response = await sourcebin.create([
// 							{
// 								name: ' ',
// 								content: output,
// 								languageId: 'text',
// 							},
// 						], {
// 							title: `Chat transcript for ${message.channel.name}`,
// 							description: ' ',
// 						});
// 					}
// 					catch(e) {
// 						return message.channel.send('An error occurred, please try again!');
// 					}

// 					const embed = new MessageEmbed()
// 						.setDescription(`[\`📄 View\`](${response.url})`)
// 						.setColor('GREEN');
// 					member.send('Here is a transcript of your ticket, please click the link below to view the transcript', embed);
// 				}).then(() => {
// 					try {
// 						message.channel.updateOverwrite(member.user, {
// 							VIEW_CHANNEL: false,
// 							SEND_MESSAGES: false,
// 							ATTACH_FILES: false,
// 							READ_MESSAGE_HISTORY: false,
// 						}).then(() => {
// 							message.channel.send(`Successfully closed ${message.channel}`);
// 						});
// 					}
// 					catch(e) {
// 						return message.channel.send('An error occurred, please try again!');
// 					}
// 				});
// 			}
// 		}
// 		else {
// 			return message.reply('you cannot use this command here. Please use this command when you\'re closing a ticket.');
// 		}
    
// 	},
// };
const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "close",
  aliases: [],
  category:'Ticket',
  run: async(client, message, args) => {
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = "$";
    }

if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					// const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					// let response;
					// try {
					// 	response = await sourcebin.create([
					// 		{
					// 			name: ' ',
					// 			content: output,
					// 			languageId: 'text',
					// 		},
					// 	], {
					// 		title: `Chat transcript for ${message.channel.name}`,
					// 		description: ' ',
					// 	});
					// }
					// catch(e) {
					// 	return message.channel.send('<a:no:876439250965508146> | An error occurred, please try again!');
					// }

					const embed = new Discord.MessageEmbed()
						.setDescription(`[\`📄 View\`]`)
						.setColor('GREEN');
					member.send('Your ticket has been closed');
				}).then(() => {
					try {
						message.channel.permissionOverwrites.edit(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Successfully closed ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('closed');
					}
				});
			}
		}
		else {
			return message.reply('<a:no:876439250965508146> | You cannot use this command here. Please use this command when you\'re closing a ticket.');
		}

}
}
