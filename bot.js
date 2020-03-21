const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Witam') {
    	message.reply('Cześć!');
  	}
});

// THIS  MUST  BE  THIS  WAS
client.login(process.env.BOT_TOKEN);
