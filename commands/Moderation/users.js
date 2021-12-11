const OWNER_ID = '432605411049209867'

module.exports = {
  name:'users',

  run: async(client,message,args) => {

  if(message.author.id != OWNER_ID){
    return message.channel.send(
         'Only the Owner of Pog Bot (Dom K#0370) has access to this command')
  }

    else{
    message.channel.send(users)
    }
  }
}