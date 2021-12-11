const { MessageEmbed } = require('discord.js')
module.exports = {
  name:'smartness',

  run: async(client,message,args) => {
    
    let person = message.mentions.members.first() 

    let author = message.author;

    let dumbrate = Math.floor(Math.random() * 101)

   if(message.mentions.members.first()){
    let embed = new MessageEmbed()
    .setTitle(`Smartness of ${message.mentions.users.first().username}`)
    .setDescription(`${dumbrate.toString()}% smart 🧠`)

    message.channel.send({embeds:[embed]})
   }
   else if(message.author){
      let embed = new MessageEmbed()
    .setTitle(`Smartness of ${message.author.username}`)
    .setDescription(`${dumbrate.toString()}% smart 🧠`)

    message.channel.send({embeds:[embed]})
}

  }
}