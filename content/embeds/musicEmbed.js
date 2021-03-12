import { MessageEmbed } from 'discord.js';

export class MusicEmbed {
  async send(title, description, color, channel) {
    const musicEmbed = new MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setColor(color);
    await channel.send(musicEmbed)
  }
}