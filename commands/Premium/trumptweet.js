const { MessageEmbed } = module.require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
  name: "trumptweet",
  category: "Premium",
  aliases: ["trump"],
  premium: true,
  usage: "trumptweet <message>",
  description:
    "Display's a custom tweet from Donald Trump with the message provided.",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const tweet = args.join(" ");
    if (!tweet) {
      return message.channel.send("Mr. President Says: `What to tweet ?`");
    }
    if (tweet.length > 200) tweet = tweet.slice(0, 197) + "...";

    try {
      const res = await fetch(
        "https://nekobot.xyz/api/imagegen?type=trumptweet&text=" + tweet
      );
      const img = (await res.json()).message;
      message.channel.send({
        files: [{ attachment: img, name: "trumptweet.png" }],
      });
    } catch (err) {
      console.log(err);
      message.channel.send(err);
    }
  },
};
