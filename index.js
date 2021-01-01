const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '아이린') {
    message.reply('사랑해요~!!');
  }
});

client.login(token);