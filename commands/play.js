import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';

export default new class extends Command {
  name = 'play';

  async execute(msg, ...args) {
    const player = MusicHandler.get(msg);
    const query = args.join(' ');
    const track = await player.play(query, msg.member);

    await msg.channel.send(`I added **${track.title}** to the queue!`);
  }
}