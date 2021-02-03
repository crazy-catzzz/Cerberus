import env from 'dotenv';
env.config();
//require('./keepAwake/awake.js');
import { Client } from 'discord.js';
const client = new Client();
import config from './settings.json';
import { CommandHandler } from './handlers/command-handler.js';
const commandHandler = new CommandHandler();

commandHandler.init();

client.on('ready', () => {
  console.log('Bot is ready!')
});

client.on('message', async (msg) => {
  if (msg.author.bot) return;

  await commandHandler.handle(msg);
});

client.login();