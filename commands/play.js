import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'play';

  async execute(msg, ...args) {
    const player = MusicHandler.get(msg);
    const query = args.join(' ');
    const track = await player.play(query, msg.member);

    await embed.send(`I added **${track.title}** to the queue!`, '0x000000', msg.channel);
  }
}