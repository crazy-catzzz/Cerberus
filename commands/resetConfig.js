import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';
import { serverConfig } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'resetConfig';

  async execute(msg, ...args) { 
    if(msg.author.id === config.ownerID || msg.member(msg.author).hasPermission('MANAGE_SERVER')) {
      serverConfig.list(msg.guild.id).then(matches => {
        for(var i = 0; i < matches.length; i++) {
          serverConfig.delete(matches[i]);
        };
        embed.send("Successfully reset Server Configuration!", '0x45B200', msg.channel);
      });
    } else embed.send("⚠ You don't have permission to do that!", '0xFF0000', msg.channel);
  }
}