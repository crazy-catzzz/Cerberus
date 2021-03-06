import { MessageEmbed } from 'discord.js';

export class MediaEmbed {
  async send(media, color, channel) {
    const mediaEmbed = new MessageEmbed()
      .setImage(media)
      .setColor(color);
    await channel.send(mediaEmbed)
  }
}