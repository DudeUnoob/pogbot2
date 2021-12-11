const db = require('quick.db')
const Discord = require('discord.js')
const request = require('node-superfetch')

module.exports = {
  name:'country',
  description:'Gives information on any country given',
  usage:'<prefix>country France',
  category:'Premium',
  premium: true,

  run: async(client,message,args) => {

    let member = message.author


    
          const query = args[0];
    const { body } = await request.get(
      `https://restcountries.com/v3.1/name/${query}`
    );
    
    const data = body[0];
    const embed = new Discord.MessageEmbed()
      .setTitle(query)
      .setThumbnail(
        `https://flagcdn.com/w320/${data.cca2}.png`
      )
      
      .addFields(
        {
          name: "👩‍🚀 Population",
          value: `\`${data.population}\``,
          inline: true
        },
        {
          name: "📍 Capital",
          value: `\`${data.capital || "No capital available!"}\``,
          inline: true
        },
        //{
        //   name: "💰 Currency",
        //   value: `\`${data.currencies[0].symbol}\``,
        //   inline: true
        // },
        {
          name: "🗺️ Location",
          value: `\`${data.subregion || data.region}\``,
          inline: true
        },
        // {
        //   name: "🏷️ Origin Title",
        //   value: `\`${data.official || "No origin title available!"}\``,
        //   inline: true
        // }
        { name: "📏 Size", value: `\`${data.area}\`km`, inline: true }
        // {
        //   name: "✏️ Languages",
        //   value: data.languages
        //     .map(language => `\`${language.name}\``)
        //     .join("\n"),
        //   inline: true
        // }
      );
    return message.channel.send({embeds: [embed]});
    
  }
}