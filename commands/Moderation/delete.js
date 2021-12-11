
module.exports = {
    name:'delete',
    memberpermissions:["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description:'clear messages',
    category: "Moderation",
    usage:"delete",

    run: async (client,message,args) => {
        const reason = args.slice(1).join(" ")
        let moderator = message.member;
        if (!args[0]) return message.reply("Please enter the amount of messages that you want to delete");
        if(isNaN(args[0])) return message.reply("Please enter a real whole number!");

        if (args[0] > 100) return message.reply("You cannot delete more than 100 messages");
        if (args[0] < 1) return message.reply("You must delete at least one message!");

        await message.channel.messages.fetch({ limit: args[0]}).then((messages) => {
            message.channel.bulkDelete(messages);
        })

        client.modlogs({
          Action: 'Deleted messages',
          Color:'ORANGE',
          Author: moderator,
          Member: moderator,
          Reason: reason,
        },message)
    } 
}