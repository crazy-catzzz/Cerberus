import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';
import { serverConfig } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'resetdb';

  async execute(msg, ...args) { 
    if(msg.author.id === config.ownerID) {
      serverConfig.list().then(keys => {
        for(var i = 0; i < keys.length; i++) {
          serverConfig.delete(keys[i]);
        };
        embed.send("Successfully reset Database!", '0x45B200', msg.channel);
      });
    } else embed.send("⚠ Only the bot owner can do that!", '0xFF0000', msg.channel);
  }
}