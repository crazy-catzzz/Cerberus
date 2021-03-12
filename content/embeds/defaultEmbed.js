import { MessageEmbed } from 'discord.js';

export class DefaultEmbed {
  async send(description, color, channel, timeout) {
    const defaultEmbed = new MessageEmbed()
      .setDescription(description)
      .setColor(color)
    await channel.send(defaultEmbed)
      .then(sent => {
        if(!timeout === true) return;
        setTimeout(() => {
          sent.delete();
        }, 2500);
      });
  }
}