const Discord = require('discord.js');

module.exports = {
    name:'8b',
    description:'8ball command',
    category: "Fun",
    usage:"8b",

    run: async (client,message,args) => {
        try{if(!args[0]) return message.reply("Please ask a full question!")
        let replies = ["yes", "Outlook seems good", "yus", "of course", "Yes - definitely", "no", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*..", "not a chance", "I think so.", "only for today!", "not for today", "sadly..yes", "sadly no..", "maybe", "ask againlater.."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor('#1C1C1C')
        .addField("Question",question)
        .addField("Answer",replies[result])

        console.log('result: ' + replies[result].toString());
        message.reply({embeds: [ballembed]});
        }
        catch (e) {
			console.log(String(e.stack).bgRed)
		}
    }
}