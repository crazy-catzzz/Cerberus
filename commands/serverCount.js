import Command from './command.js';
import config from '../settings.json';
import { client } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'serverCount';

  async execute(msg, ...args) {
    embed.send(`I'm in ${client.guilds.cache.size} servers!`, '0x000000', msg.channel);
  }
}