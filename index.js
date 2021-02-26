import config from './settings.json';

import { Client } from 'discord.js';
const client = new Client();


import Database from '@replit/database';

export const serverConfig = new Database();
export const globalPrefix = config.prefix;
const automodDefault = config.automodDefault;
const automodListDefault = config.badwords;


import { CommandHandler } from './handlers/command-handler.js';
const commandHandler = new CommandHandler();

import { LinkFilter } from './modules/linkFilter.js';
const linkFilter = new LinkFilter();

import { Automod } from './modules/automod.js';
const automod = new Automod();

commandHandler.init();

client.on('ready', () => {
  console.log('Bot is ready!');
  client.user.setActivity(`${client.guilds.cache.size} servers`, { type: "WATCHING" });
});

client.on('message', async (msg) => {
  if(msg.author.bot) return;

  /*AUTOMOD*/
  let badwords;

  let checkAutomodOnOff = await serverConfig.get(`${msg.guild.id}-AutomodSetting`);
  console.log(checkAutomodOnOff);

  let checkAutomodList = await serverConfig.get(`${msg.guild.id}-AutomodList`);
  console.log(checkAutomodList);

  if(checkAutomodOnOff === null) {
  } else {
      switch(checkAutomodOnOff) {
        case true || 'true':
          if(checkAutomodList === null) {
            badwords = automodListDefault;
            await automod.check(msg, badwords);
          } else {
            badwords = await serverConfig.get(`${msg.guild.id}-AutomodList`);
            await automod.check(msg, badwords);
          }
          break;

        case false || 'false':
          break;
      }

  }

  /*LINK FILTER*/
  let badLinks = config.badLinks;
  let filterEnabled = await serverConfig.get(`${msg.guild.id}-LinkFilterSetting`);
  console.log(filterEnabled);

  switch(filterEnabled) {
    case undefined || null || true || "true":
      linkFilter.check(msg, badLinks);
      break;
  }
  
  /*PREFIX CHECK*/
  let prefix;

  let guildPrefix = await serverConfig.get(`${msg.guild.id}-Prefix`)
  if(typeof guildPrefix === "string") {
    prefix = guildPrefix
  } else prefix = globalPrefix;

  if (!msg.content.startsWith(prefix)) return
  await commandHandler.handle(msg, prefix);
});

client.login();