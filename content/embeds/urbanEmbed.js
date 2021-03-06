import { MessageEmbed } from 'discord.js';

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

export class UrbanEmbed {
  async send(title, url, description, example, thumbsup, thumbsdown, channel) {
    const embed = new MessageEmbed()
      .setColor('#EFFF00')
      .setTitle(title)
      .setURL(url)
      .addFields(
        { name: 'Definition', value: trim(description, 1024) },
        { name: 'Example', value: trim(example, 1024) },
        { name: 'Rating', value: `${thumbsup} thumbs up. ${thumbsdown} thumbs down.` },
      );

    channel.send(embed);
  }
}