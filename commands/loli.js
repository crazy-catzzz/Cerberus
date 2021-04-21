import Command from './command.js';

import { MessageAttachment } from 'discord.js';
import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
import { MediaEmbed } from '../content/embeds/mediaEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'loli';
  nsfw = true;

  async execute(msg, ...args) {
    
    const fbi = new MessageAttachment("content/vids/fbi.gif");

    msg.channel.send("https://tenor.com/view/fb%c4%b1dance-in-peace-gif-19699952");
  }
}