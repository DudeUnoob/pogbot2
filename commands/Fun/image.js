const get = require('node-fetch2');
const Discord = require('discord.js');

module.exports = {
    name: 'image',
    description: 'Search images through google images',
    category:'Fun',
    usage:'image',
    run: async (client, message,  args) => {
        if (!args.length) return message.channel.send('Please specify the name of the image you want to search.')
        
        // Note that ephemeral messages are only available with Interactions, so we can't make the response here as an ephemeral.
        // Meaning People can search dirty things and the image will be seen by everyone, It's up to you on how you can make this safe.
        
        const cx = process.env.GOOGLE_CX // Watch the video to get your google cx.
        const key = process.env.GOOGLE_KEY // Watch the video to get your google api key.

        let res = await get(
            `https://customsearch.googleapis.com/customsearch/v1?q=${args.join(' ')}&cx=${cx}&key=${key}&searchType=image`
        ).catch(e => console.log(e));
        
        if (!res) return message.channel.send('Unable to fetch the requested image.');
        if (res.status >= 400) return message.channel.send(`Error ${res.status}: ${res.statusText}`);
        
         let blacklisted = ['sex','slave','racist','porn','sex slave','penis','cock','boobs','ass','thighs','hentai','dick','dildo','naked','nigger','nigga','racist','bitch','fuck','tits','asshole','butthole','pussy','vagina','masturbate','masturbation'];
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
      message.delete();
      message.channel.send('Bro really??? nsfw??? go do that somewhere else...');
      return;
    }

        res = await res.json();
        if (!res.items?.length) return message.channel.send('No results found.');

        message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setImage(res.items[0].link)
                    .setTitle(`Image result for ${args.join(' ')}`)
            ]
        });
    }
}