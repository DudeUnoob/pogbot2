const db = require('quick.db')

module.exports = {

  name:'pog',
  description:'A test command for premium members note, only the owner of the bot (Dom K#0370) can give premium commands to members, as this is still in development',
  category:'Premium',
  premium: true,

  run: async(client,message,args) => {


    message.channel.send('POGGERS')
  
}
}