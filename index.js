require('dotenv').config();
//require('./keepAwake/awake.js');
const Config = require("./settings.json");
const { Client } = require('discord.js');
const client = new Client();
const { play, stop } = require('./commands.js');

client.login();

client.on('ready', () => {
  console.log("Successfully logged in!");
});

client.on('message', (message) => {

  if(message.author.bot) return;

  const prefix = Config.prefix
  if(!message.content.startsWith(prefix)) return;

  const commandName = getCommandName(prefix, message.content);
  const args = getCommandArgs(prefix, message.content);

  if(commandName === 'play')
    return play(message, args);
  else if(commandName === 'stop')
    return stop(message, args);
});

function getCommandName(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')[0];
}
function getCommandArgs(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')
    .slice(1);
}