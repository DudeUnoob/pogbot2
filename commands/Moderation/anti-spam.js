const usersMap = new Map();
const LIMIT = 5;
const DIFF = 5000;
const db = require('quick.db');
const antispam = require("discord-spam-protector");


module.exports = {
name:'anti-spam',
description:'Anti-spam command, turn it on/off',
aliases:['antispam','a-spam'],
category:'Moderation',
usage:'<prefix>anti-spam',
memberpermissions:['ADMINISTRATOR'],
run: async(client,message,args) => {
  


      message.channel.send('Anti-spam is on')
      client.on('message', async(message) => {
    if(message.author.bot) return;
    
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, 2000);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {

               message.reply("Warning: Spamming in this channel is forbidden.");
              message.channel.bulkDelete(LIMIT);
               
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, 2000);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }

})
    



  }
}



// let channel = message.guild.channels.cache.find(
//   channel => channel.name.toLowerCase() === "mod-logs"
// )
// if(!channel){
//     message.guild.channels.create('mod-logs', { reason: 'Modlogs for antispam will be here'}) 

// channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: false });


// }else{
//   message.channel.send('You already have a #mod-logs channel for anti-spam')
//   return;
// }

// client.on("messageCreate", (message) => antiSpam.message(message))