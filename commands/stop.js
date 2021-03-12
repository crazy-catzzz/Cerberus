import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed(); 

export default new class extends Command {
  name = 'stop';

  async execute(msg) {
    const player = MusicHandler.get(msg);
    await player.leave();

    await embed.send(`I stopped the party...`, '0x000000', msg.channel);
  }
}