import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'skip';

  async execute(msg) {
    const player = MusicHandler.get(msg);

    const oldTrack = player.q.peek();
    await player.skip();

    await embed.send(`I skipped \`${oldTrack.title}\`!`, '0x000000', msg.channel);
  }
}