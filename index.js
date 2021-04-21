import config from './settings.json';

import './keepAwake/awake.js'

import { Client } from 'discord.js';
export const client = new Client();

import { WelcomeMessage } from './modules/welcomeMessage.js';
const welcomeMessage = new WelcomeMessage();

import Database from '@replit/database';

export const serverConfig = new Database();
export const globalPrefix = config.prefix;
const automodDefault = config.automodDefault;
const automodListDefault = config.badwords;

import { DefaultEmbed } from './content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

import { CommandHandler } from './handlers/command-handler.js';
const commandHandler = new CommandHandler();

import { Automod } from './modules/automod.js';
const automod = new Automod();

commandHandler.init();

client.on('ready', () => {
  console.log(`Bot is ready! Logged in as ${client.user.tag}`);
  client.user.setActivity(`${config.prefix}help`, { type: "LISTENING" });
});

client.on('guildMemberAdd', member => {
  welcomeMessage.sendWelcomeMsg(member);
});

client.on('message', async msg => {
  if(msg.author.bot) return;

  /*AUTOMOD*/
  let badwords;

  let checkAutomodOnOff = await serverConfig.get(`${msg.guild.id}-AutomodSetting`);
  //console.log(checkAutomodOnOff);

  let checkAutomodList = await serverConfig.get(`${msg.guild.id}-AutomodList`);
  //console.log(checkAutomodList);

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

  /*PREFIX CHECK*/
  let prefix;

  let guildPrefix = await serverConfig.get(`${msg.guild.id}-Prefix`)
  if(typeof guildPrefix === "string") {
    prefix = guildPrefix
  } else prefix = globalPrefix;

  if(!msg.content.startsWith(prefix)) return;

  /*BAN CHECK*/
  const isBanned = await serverConfig.get(`${msg.author.id}-banned`);
  if(isBanned) return embed.send("⚠ You are banned from using this bot!", '0xFF0000', msg.channel)
  await commandHandler.handle(msg, prefix);
});

client.login();