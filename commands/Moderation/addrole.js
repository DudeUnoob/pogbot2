  module.exports = {
  name:'addrole',
  aliases:['roleadd','setrole'],
  description:'Adds the role to a mentioned user',
  usage:'<prefix>addrole @person @role',
  category:'Moderation',
  memberpermissions:['MANAGE_ROLES'],
  


    run: async(client,message,args) => {
   
let member = message.author.username;
let person = message.mentions.members.first()
const reason = args.slice(1).join(" ") || "No reason provided";
let roleAdd = message.mentions.roles.first()
let myRole = message.guild.roles.cache.find(role => role.id === roleAdd.id);

if(person.roles.cache.find(role => role.id === roleAdd.id)){
  message.channel.send(`This person already has the **${roleAdd.name}** role`)
  return;
}

// if (message.member.roles.has(roleAdd.id)) {
//         message.channel.send('Member already has that role')
//     }
person.roles.add(myRole)
message.channel.send(`Added the ${myRole.name} role to <@${person.id}>`)

client.modlogs({
          Member: person,
          Action: 'Add Role',
          Color: "BLUE",
          Reason: reason,
          Author: member,
        }, message)

  //  let roleAdd = message.mentions.roles.first()
  //  let person = message.mentions.members.first()
   
  //  if(roleAdd){
  //    message.channel.send('Please mention someone to add the role too')
  //  }
  //  let testedRole = message.guild.roles.cache.get(r => r.id === roleAdd);
    
  //   person.roles.add(testedRole)
    }
}

