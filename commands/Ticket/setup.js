// const sourcebin = require('sourcebin_js');
// const { MessageEmbed } = require('discord.js');

// module.exports = {
// 	name: 'transcript',
// 	category: 'Ticket',
// 	description: 'Trascripts a specified ticket.',
// 	aliases: [],
// 	usage: 'transcript',
// 	run: async (client, message, args) => {
// 		// const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
// 		// if (channel.name.includes('ticket-')) {
// 		// 	if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
// 		// 		channel.messages.fetch().then(async (messages) => {
// 		// 			const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

// 		// 			let response;
// 		// 			try {
// 		// 				response = await sourcebin.create([
// 		// 					{
// 		// 						name: ' ',
// 		// 						content: output,
// 		// 						languageId: 'text',
// 		// 					},
// 		// 				], {
// 		// 					title: `Chat transcript for ${channel.name}`,
// 		// 					description: ' ',
// 		// 				});
// 		// 			}
// 		// 			catch(e) {
// 		// 				return message.channel.send('An error occurred, please try again!');
// 		// 			}

// 		// 			const embed = new MessageEmbed()
// 		// 				.setDescription(`[\`📄 View\`](${response.url})`)
// 		// 				.setColor('GREEN');
// 		// 			message.reply('the transcript is complete. Please click the link below to view the transcript', embed);
// 		// 		});
// 		// 	}
// 		// }
// 		// else {
// 		// 	return message.reply(
// 		// 		'you cannot use this command here. Please use this command in a open ticket.',
// 		// 	);
// 		// }
    
// 	},
// };
const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "setup",
  aliases: [],
  category:'Ticket',
  memberpermissions:['MANAGE_SERVER'],
  run: async(client, message, args) => {
    const log = message.guild.channels.cache.find(log => log.name === "ticket-box")
  if(log)
  {
    return message.reply("<a:no:876439250965508146> | You already have setuped the ticket box")
  }
message.guild.channels.create(`ticket-box`, {
			permissionOverwrites: [
				
			
				{
					id: message.guild.roles.everyone,
					allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
				},
			],
			type: 'text',
		}).then(async channel => {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Ticket Box`)
      .setDescription("Do `$new` for creating a ticket")
      channel.send({embeds: [embed]});
      let vc1 = "600";
 channel.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
 db.set(`setuped_${message.guild.id}`, channel.id);
    })
    message.reply("<:tick_yes:866150426738425856> | Done now i will only accept ticket messages from ticket-box channel")
  }}