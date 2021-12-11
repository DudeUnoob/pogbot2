const OWNER_ID = '432605411049209867'
module.exports = {
  name:'botservers',
  description:'see what servers the bot is in',

  run: async(client, message, args) => {
      if (message.author.id != OWNER_ID)
        return message.channel.send(
         'Only the Owner of Pog Bot (Dom K#0370) has access to this command'
        );
      
      let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `🔹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `🔹 ` + data.join("\n🔹");
      } else {
        data = "[No server found]";
      }
  }
}