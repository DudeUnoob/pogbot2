const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    description:'Mutes the member',
    usage:'$pmute <member> (sync the permissions to the category then the text channels',
    category:'Moderation',
    memberpermissions:['MANAGE_MESSAGES','MANAGE_ROLES'],
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
      let moderator = message.author.username;
        //if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send('Member is not found.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        const reason = args.slice(1).join(" ") || "No reason provided";
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    
                        name : 'muted',
                        permissions: []
                    
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.permissionOverwrites.create(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now muted.`)
        
        client.modlogs({
          Member: Member,
          Action: 'Mute',
          Color: "ORANGE",
          Reason: reason,
          Author: moderator,
        }, message)
    }
}
