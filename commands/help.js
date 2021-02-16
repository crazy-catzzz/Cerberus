import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';

export default new class extends Command {
  name = 'help';

  async execute(msg, ...args) {
    
    switch(args[0]) {
      case undefined:
        const helpEmbed = new MessageEmbed()
          .setTitle("You're witnessing the help page!")
          .setDescription(`To reduce the embed's volume, we have split the message into parts, use \`${config.prefix}help <part>\`.`)
          .setColor('0x0091F4')
          .addFields(
            {name: `\`general\``, value: 'General commands.', inline: true},
            {name: `\`music\``, value: 'Music commands.', inline: true},
            {name: `\`moderation\``, value: 'Moderation commands.', inline: true},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(helpEmbed);
        break;

      case "music":
        const musicEmbed = new MessageEmbed()
          .setTitle("♫ Music commands ♫")
          .setDescription(`This is a list of every music command that this bot has to offer.`)
          .setColor('0x0091F4')
          .addFields(
            {name: `${config.prefix}help`, value: 'Show this message.'},
            {name: `${config.prefix}play <song name>`, value: 'Play a song!'},
            {name: `${config.prefix}queue`, value: 'Show the queue.'},
            {name: `${config.prefix}seek <seconds>`, value: 'Seek a point in the song.'},
            {name: `${config.prefix}skip`, value: 'Skip a song.'},
            {name: `${config.prefix}stop`, value: 'Stop a song.'},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(musicEmbed);
        break;
    };
  }
}