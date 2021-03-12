import Command from './command.js';
import { MusicHandler } from '../handlers/music-handler.js';
import { MusicEmbed } from '../content/embeds/musicEmbed.js';
const musicEmbed = new MusicEmbed();

export default new class extends Command {
  name = 'queue';

  async execute(msg) {
    const player = MusicHandler.get(msg);
    const details = player.q.items
      .map(track => `\`${track.title}\` [${track.requestor}]`)
      .join('\n');

    //await msg.channel.send(`>>> **Queue**: \n${details}`);
    await musicEmbed.send('The queue is:', `\n${details}`, '0x000000', msg.channel);
  }
}