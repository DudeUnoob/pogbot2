const { MessageEmbed } = require('discord.js')
module.exports = {

name:'avatar',
descrption:"gives the mentioned user's avatar",
category:'Fun',

run: async(client,message,args) => {

const user = message.mentions.users.first() || message.author;
const avatarEmbed = new MessageEmbed()
  .setColor(0x333333)
  .setAuthor(`${user.username}'s Avatar`)
  .setImage(
    `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
  );
message.channel.send({embeds:[avatarEmbed]});

}
}