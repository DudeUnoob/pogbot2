const Discord = require('discord.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
  
    name:'dog',
    description:'sends a cute dog picture',
    category:'Fun',
    usage:'dog',

    run: async (client,message,args) => {
        
        let data = await fetch
        (`https://random.dog/woof.json?ref=apilist.fun${args.join(` `)}`).then(res => res.json())

        const embed = new Discord.MessageEmbed()
        embed.setTitle('Cute dog')
        embed.setColor('RANDOM')
        embed.setFooter('cute dog')
        embed.setImage(data.url)

        message.reply({embeds: [embed]});
     }

    
}
