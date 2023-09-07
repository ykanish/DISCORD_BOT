require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client(
    { intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
 });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

client.on("messageCreate", function(message) {
   if (message.author.bot) return;
   return message.reply(`${message.content}`);                          

});                               
client.login(process.env.DISCORD_TOKEN);
console.log("CHAT GPT is ready to use");