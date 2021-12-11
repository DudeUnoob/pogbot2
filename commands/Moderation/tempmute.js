const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'tempmute',
    /**
     * @param {Message} message
     */
    description:'temporarily mutes the member',
    usage:'$tempmute <member> <time in ms> ex: $tempmute @person 6000(mutes the member for 6 seconds) (sync the permissions to the category then the text channels',
    category:'Moderation',
    memberpermissions:['MANAGE_MESSAGES'],
    run : async(client, message, args) => {
       // if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
       let moderator = message.author.username;
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const reason = args.slice(2).join(" ") || "No reason provided";
        const time = args[1]
        if(!Member) return message.channel.send('Member is not found.')
        if(!time) return message.channel.send('Please specify a time.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
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
          Action:'Temp muted',
          Color: "YELLOW",
          Reason: reason,
          Author: moderator,
        },message)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.displayName} is now unmuted`)
        }, ms(time))
    }
}