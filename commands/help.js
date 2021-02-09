import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';

export default new class extends Command {
  name = 'help';

  async execute(msg) {
    const embed = new MessageEmbed()
      .setTitle("You're witnessing the help page!")
      .setColor('0x0091F4')
      .addFields(
        {name: `${config.prefix}help`, value: 'Show this message.'},
        {name: `${config.prefix}play <song name>`, value: 'Play a song!'},
        {name: `${config.prefix}queue`, value: 'Show the queue.'},
        {name: `${config.prefix}seek <seconds>`, value: 'Seek a point in the song.'},
        {name: `${config.prefix}skip`, value: 'Skip a song.'},
        {name: `${config.prefix}stop`, value: 'Stop a song.'},
      );
    msg.channel.send(embed);
  }
}