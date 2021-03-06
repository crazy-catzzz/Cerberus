import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'help';

  async execute(msg, ...args) {
    
    switch(args[0]) {
      case undefined:
        const helpEmbed = new MessageEmbed()
          .setTitle("You're witnessing the help page!")
          .setDescription(`To reduce the embed's volume, we have split the message into parts, use \`${config.prefix}help <part>\`.`)
          .setColor('0x000000')
          .addFields(
            {name: `\`general\``, value: 'General commands.', inline: true},
            {name: `\`music\``, value: 'Music commands.', inline: true},
            {name: `\`moderation\``, value: 'Moderation commands.', inline: true},
            {name: `\`config\``, value: 'Bot configuration commands.', inline: true},
            {name: `\`nsfw\``, value: 'NSFW commands.', inline: true},
            {name: `\`dev\``, value: 'Bot development commands. Most are owner-only', inline: true},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(helpEmbed);
        break;

      case "music":
        const musicEmbed = new MessageEmbed()
          .setTitle("♫ Music commands ♫")
          .setDescription(`This is a list of every music command this bot has to offer.`)
          .setColor('0x000000')
          .addFields(
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
      
      case "general":
        const generalEmbed = new MessageEmbed()
          .setTitle("General Commands")
          .setDescription(`This is a list of every command that doesn't belong in any particular category.`)
          .setColor('0x000000')
          .addFields(
            {name: `${config.prefix}help`, value: 'Show the help message.'},
            {name: `${config.prefix}serverCount`, value: 'Show how many servers Cerberus is in.'},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(generalEmbed);
        break;
      
      case "moderation":
        const moderationEmbed = new MessageEmbed()
          .setTitle("Moderation Commands")
          .setDescription(`This is a list of every command that moderators can use to maintain order within the server.`)
          .setColor('0x000000')
          .addFields(
            {name: `${config.prefix}kick`, value: 'Kick a member.\nRequires the \`KICK_MEMBERS\` permission.'},
            {name: `${config.prefix}ban`, value: 'Ban a member.\nRequires the \`BAN_MEMBERS\` permission.'},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(moderationEmbed);
        break;
      
      case "config":
        const configEmbed = new MessageEmbed()
          .setTitle("Configuration Commands")
          .setDescription(`This is a list of commands you can use to configure Cerberus to your liking.`)
          .setColor('0x000000')
          .addFields(
            {name: `${config.prefix}set automod <args>`, value: 'Automod settings.\nLeave blank to show the forbidden words or use **these arguments:**\n> \`on\`/\`off\`: turn Automatic Moderation ON or OFF;\n> \`become <words>\`: set the forbidden words list into the passed words.\nRequires the \`MANAGE_SERVER\` permission.'},
            {name: `${config.prefix}set prefix <new prefix>`, value: "Change the bot's prefix.\nRequires the \`MANAGE_SERVER\` permission."},
            {name: `${config.prefix}resetConfig`, value: `Reset Server Configuration.\nRequires the \`MANAGE_SERVER\` permission.`},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(configEmbed);
        break;

      case 'dev':
        const devEmbed = new MessageEmbed()
          .setTitle("Development Commands")
          .setDescription(`This is a list of developer commands. Most are Owner-Only.`)
          .setColor('0x000000')
          .addFields(
            {name: `${config.prefix}eval`, value: `Make the bot execute a line of code.`},
            {name: `${config.prefix}resetdb`, value: `Reset Cerberus' Database, deleting all server configs.`},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        msg.channel.send(devEmbed);
        break;
      
      case 'nsfw':
        const nsfwEmbed = new MessageEmbed()
          .setTitle("Development Commands")
          .setDescription(`This is a list of developer commands. Most are Owner-Only.`)
          .setColor('0x000000')
          .addFields(
            {name: `${config.prefix}neko`, value: `Send a Cat Girl aka a Neko.`},
            {name: `${config.prefix}randomgif`, value: `Send a random Hentai GIF.`},
            {name: '\u200B', value: '\u200B'},
          )
          .setTimestamp()
          .setFooter('Cerberus was created and is developed by CrazyCatzzz#6964', 'https://cdn.discordapp.com/avatars/459097988397269002/cf3841f5e388b4b8373e7c071cfb239f.png');
        if(!msg.channel.nsfw) return embed.send(`⚠ This command can only be ran in a NSFW channel.`, '0xFF0000', msg.channel);
        msg.channel.send(nsfwEmbed);
        break;

      default:
        embed.send(`⚠ No valid argument was provided, say \`${config.prefix}help\` to check which arguments are valid.`, '0xFF0000', msg.channel);
        break;
    };
  }
}