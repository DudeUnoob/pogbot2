const db = require('../../handlers/warns')

module.exports = {
    name : 'remove-warn',
    aliases:['r-warn','rwarn'],
    category:'Moderation',
    description:'Removes one warn from the user',
    usage:'<prefix>remove-warn @person <warn number> <reason (optional>',
    memberpermissions:['ADMINISTRATOR'],
    run : async(client, message, args) => {
      let moderator = message.author.username;
      const reason = args.slice(2).join(" ") || "No reason provided";
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('deleted the warn')
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })

        client.modlogs({
          Member: user,
          Action: 'Removed Warn',
          Color: 'GREEN',
          Reason: reason,
          Author: moderator,
        }, message)
    }
}// module.exports = {
//   name:'removerole',
//   aliases:['roleremove'],
//   description:'removes the role to a mentioned user',
//   usage:'<prefix>removerole @person @role',
//   category:'Moderation',
  

// run: async(client,message,args) => {
   
// let person = message.mentions.members.first()
// let roleAdd = message.mentions.roles.first()
// let myRole = message.guild.roles.cache.find(role => role.id === roleAdd.id);

// if(!person.roles.cache.find(role => role.id === roleAdd.id)){
//   message.channel.send(`<@${person.id}> doesn't have the ${myRole.name} role`)
//   return;
// }


// person.roles.remove(myRole)
// message.channel.send(`Removed the ${myRole.name} role from <@${person.id}>`)
//     }

// }