import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'seek';

  async execute(msg, to) {
    to = +to;

    const player = MusicHandler.get(msg);
    const seconds = Math.round(player.position / 1000);
    if (!to)
      return msg.channel.send(`The record is at position \`${seconds}s\`.`);

    await player.seek(to);

    await embed.send(`I spun the record to \`${to}s\`!`, '0x000000', msg.channel);
  }
}