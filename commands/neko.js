import Command from './command.js';

import fetch from 'node-fetch';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
import { MediaEmbed } from '../content/embeds/mediaEmbed.js';
const embed = new DefaultEmbed();
const mediaEmbed = new MediaEmbed();

export default new class extends Command {
  name = 'neko';

  async execute(msg, ...args) {
    if(!msg.channel.nsfw) return embed.send(`⚠ This command can only be ran in a NSFW channel.`, '0xFF0000', msg.channel);
    const { neko } = await fetch('https://www.nekos.life/api/lewd/neko')
      .then(res => res.json())
    
    mediaEmbed.send(neko, '0xFF00CC', msg.channel);
  }
}