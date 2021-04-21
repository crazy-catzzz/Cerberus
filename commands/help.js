import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';

import { HelpManager } from '../modules/helpManager.js';
const manager = new HelpManager();

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'help';

  async execute(msg, ...args) {
    
    switch(args[0]) {
      case undefined:
        manager.noArg(msg);
        break;

      case "music":
        manager.music(msg);
        break;
      
      case "general":
        manager.general(msg);
        break;
      
      case "moderation":
        manager.moderation(msg);
        break;
      
      case "config":
        manager.config(msg);
        break;

      case 'dev':
        manager.dev(msg);
        break;
      
      case 'nsfw':
        manager.nsfw(msg);
        break;
      
      case 'media':
        manager.media(msg);
        break;

      case 'misc':
        manager.misc(msg);
        break;

      default:
        embed.send(`⚠ No valid argument was provided, say \`${config.prefix}help\` to check which arguments are valid.`, '0xFF0000', msg.channel);
        break;
    };
  }
}