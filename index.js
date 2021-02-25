import config from './settings.json';

import { Client } from 'discord.js';
const client = new Client();


import Database from '@replit/database';

export const prefixes = new Database();
const globalPrefix = config.prefix;

export const automodOnOff = new Database();
const automodDefault = config.automodDefault;

export const automodList = new Database();
const automodListDefault = config.badwords;

import { CommandHandler } from './handlers/command-handler.js';
const commandHandler = new CommandHandler();

import { Automod } from './modules/automod.js';
const automod = new Automod();

commandHandler.init();

client.on('ready', () => {
  console.log('Bot is ready!');
  client.user.setActivity(`in ${client.guilds.cache.size} servers`, { type: "PLAYING" });
});

client.on('message', async (msg) => {
  if(msg.author.bot) return;

  /*AUTOMOD*/
  let badwords;
  let automodEnabled;

  let checkAutomodOnOff = await automodOnOff.get(`${msg.guild.id}-AutomodSetting`);
  console.log(checkAutomodOnOff);

  let checkAutomodList = await automodList.get(`${msg.guild.id}-AutomodList`);
  console.log(checkAutomodList);

  if(checkAutomodOnOff === null) {
  } else {
      switch(checkAutomodOnOff) {
        case true || 'true':
          if(checkAutomodList === null) {
            badwords = automodListDefault;
            await automod.check(msg, badwords);
          } else {
            badwords = await automodList.get(`${msg.guild.id}-AutomodList`);
            await automod.check(msg, badwords);
          }
          break;

        case false || 'false':
          break;
      }

  }
  
  /*PREFIX CHECK*/
  let prefix;

  let guildPrefix = await prefixes.get(`${msg.guild.id}-prefix`)
  if(typeof guildPrefix === "string") {
    prefix = guildPrefix
  } else prefix = globalPrefix;

  if (!msg.content.startsWith(prefix)) return
  await commandHandler.handle(msg, prefix);
});

client.login();