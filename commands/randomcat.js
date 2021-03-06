import Command from './command.js';

import fetch from 'node-fetch';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
import { MediaEmbed } from '../content/embeds/mediaEmbed.js';
const embed = new DefaultEmbed();
const mediaEmbed = new MediaEmbed();

export default new class extends Command {
  name = 'randomcat';

  async execute(msg, ...args) {
    const { file } = await fetch('https://aws.random.cat/meow')
      .then(res => res.json())
    
    mediaEmbed.send(file, '0x45B200', msg.channel);
  }
}