import env from 'dotenv';
env.config();

import config from './settings.json';

import './keepAwake/awake.js';

import { Client } from 'discord.js';
const client = new Client();

import { CommandHandler } from './handlers/command-handler.js';
const commandHandler = new CommandHandler();

commandHandler.init();

client.on('ready', () => {
  console.log('Bot is ready!')
  client.user.setActivity(`${config.prefix}help`, { type: "PLAYING" });
});

client.on('message', async (msg) => {
  if (msg.author.bot) return;

  await commandHandler.handle(msg);
});

client.login();