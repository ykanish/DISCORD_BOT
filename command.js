const {REST, Routes} = require("discord.js");
// to create the ping comand to chrck the connectuvity  of my bot
const commands = [
    {
      name: 'ping',
      description: 'Replies with Abuse!',
    },
  ];        
  const rest = new REST({ version: '10' }).setToken('MTE0OTA3MzI1Njg5MzEyMDYwMg.GUKLJF.Z9yrXE26dIhsV1lVa4bjn-VaRAcdyOl7FEcEjs');

  async function refreshApplicationCommands() {
    try {
      console.log('Started refreshing application (/) commands.');
  
      await rest.put(Routes.applicationCommands('1149073256893120602'), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the asynchronous function
  refreshApplicationCommands();
  