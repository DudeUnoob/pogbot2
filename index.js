const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);
const filters = require(`./botconfig/filters.json`);
const colors = require("colors"); 
const Enmap = require("enmap");
const { Intents } = require('discord.js')
const canvacord = require("canvacord");
const mongoose = require('mongoose')
const prefix = config.prefix;
const db = require("quick.db");
const libsodium = require("libsodium-wrappers");
const ffmpeg = require("ffmpeg-static");
const voice = require("@discordjs/voice");
const DisTube = require("distube").default;
const https = require('https-proxy-agent');
const modlogsSchema = require('./handlers/modlogs')
const premiumSchema = require('./handlers/premium')
const { mongooseConnectionString } = require(`./botconfig/config.json`);
var jimp = require('jimp')
const client = new Discord.Client({
    shards: "auto",
   
    allowedMentions: {
      parse: [],
      repliedUser: false,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ],
    presence: {
      activity: {
        name: `+help | musicium.eu`, 
        type: "PLAYING", 
      },
      status: "online"
    }
});
        //load the Discord.js Library          //make a new Client
      //load the config.json file              //load the enmap library
        //load the canvacord library
// client.points = new Enmap({ name: "points" }); //For ranking system
// client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
// const ranking = require("./ranking");         //load the ranking file
// ranking(client); 
//BOT CODED BY: Tomato#6966
//DO NOT SHARE WITHOUT CREDITS!
//const proxy = 'http://123.123.123.123:8080';
//const agent = https(proxy);
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
let spotifyoptions = {
  parallel: true,
  emitEventsAfterFetching: true,
}
if(config.spotify_api.enabled){
  spotifyoptions.api = {
    clientId: config.spotify_api.clientId,
    clientSecret: config.spotify_api.clientSecret,
  }
}
client.distube = new DisTube(client, {
  emitNewSongOnly: false,
  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
  savePreviousSongs: true,
  emitAddSongWhenCreatingQueue: false,
  //emitAddListWhenCreatingQueue: false,
  searchSongs: 0,
  youtubeCookie: config.youtubeCookie,     //Comment this line if you dont want to use a youtube Cookie 
  nsfw: true, //Set it to false if u want to disable nsfw songs
  emptyCooldown: 25,
  ytdlOptions: {
    //requestOptions: {
    //  agent //ONLY USE ONE IF YOU KNOW WHAT YOU DO!
    //},
    highWaterMark: 1024 * 1024 * 64,
    quality: "highestaudio",
    format: "audioonly",
    liveBuffer: 60000,
    dlChunkSize: 1024 * 1024 * 64,
  },
  youtubeDL: true,
  updateYouTubeDL: true,
  customFilters: filters,
  plugins: [
    new SpotifyPlugin(spotifyoptions),
    new SoundCloudPlugin()
  ]
})
//Define some Global Collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
client.allEmojis = require("./botconfig/emojis.json");
client.snipes = new Discord.Collection();
client.modlogs = async function({ Member, Action, Color, Reason, Author}, message) {
    const data = await modlogsSchema.findOne({ Guild: message.guild.id });
    if(!data) return;

    const channel = message.guild.channels.cache.get(data.Channel);
    const logsEmbed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`Reason: ${Reason || 'No Reason!'}`)
        .addField('Member', `${Member.user.tag} (${Member.id || '.'})`)
        .setTitle(`Action took: ${Action}`)
        .setFooter(`By: ${Author || 'none'}`)

    channel.send({embeds: [logsEmbed]})
}

client.setMaxListeners(100); require('events').defaultMaxListeners = 100;

client.settings = new Enmap({ name: "settings",dataDir: "./databases/settings"});
client.infos = new Enmap({ name: "infos", dataDir: "./databases/infos"});


//Require the Handlers                  Add the antiCrash file too, if its enabled
["events", "commands", "slashCommands","premium", "welcomeChannel","modlogs",  settings.antiCrash ? "antiCrash" : null, "distubeEvent"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })|| config.token
//Start the Bot
client.login(process.env.token || config.token)




/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */








/**
 * @LOAD_THE_DASHBOARD - Loading the Dashbaord Module with the BotClient into it!
 */
client.on("ready", () => {
  require("./dashboard/index.js")(client);
  


})

const Schema = require('./handlers/welcomeChannel');
const canvas = require('discord-canvas');
const { MessageAttachment } = require('discord.js')
// const client = require('../../index')


 
client.on('guildMemberAdd', async(member) => {
  Schema.findOne({ Guild: member.guild.id }, async(e,data ) => {
 if(!data) return;
  const user = member.user;
  const image =  new canvas.Welcome()
  .setUsername(user.username)
  .setDiscriminator(user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(user.displayAvatarURL({ format: 'png' }))
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("data:image/jpeg;base64,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")
  .toAttachment();
    
      const attachment = new MessageAttachment((await image).toBuffer(), "goodbye-image.png");

      const channel = member.guild.channels.cache.get(data.Channel);
      channel.send({files: [attachment]})
  })

    const g = client.guilds.cache.get("893850212127342613");


  g.members.cache.forEach(member => {
    if (member.roles.cache.some(role => role.id === "917424752946188308")){
      premiumSchema.findOne({
      User: member.id
    },async(err, data) => {
      if(data) return console.log("Member already has the premium role")

      new premiumSchema({
        User: member.id
      }).save();
          return console.log('Add the new member to the database')
    })
    }
  })
})

client.on('messageDelete', (message) => {
  let snipes = client.snipes.get(message.channel.id) || [];
  if (snipes.length > 5) snipes = snipes.slice(0, 4);

  snipes.unshift({
    msg: message,
    image: message.attachments.first()?.proxyURL || null,
    time: Date.now(),
  })

  client.snipes.set(message.channel.id, snipes);
})








	


