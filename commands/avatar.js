import Command from './command.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
import { MediaEmbed } from '../content/embeds/mediaEmbed.js';
const embed = new DefaultEmbed();
const mediaEmbed = new MediaEmbed();

export default new class extends Command {
  name = 'avatar';

  async execute(msg, ...args) {
    const user = msg.mentions.users.first();
    if(!user) return embed.send('error', '0xFF0000', msg.channel);
    const avatar = user.displayAvatarURL({ format: 'jpg' });
    mediaEmbed.send(avatar, '0x2200CC', msg.channel);
  }
}