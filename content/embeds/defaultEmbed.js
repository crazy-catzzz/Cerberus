import { MessageEmbed } from 'discord.js';

export class DefaultEmbed {
  async send(description, color, channel) {
    const defaultEmbed = new MessageEmbed()
      .setDescription(description)
      .setColor(color)
    await channel.send(defaultEmbed);
  }
}