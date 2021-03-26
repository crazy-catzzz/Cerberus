/*import Command from './command.js';
import { MessageEmbed } from 'discord.js';

import { serverConfig } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();


export default new class extends Command {
  name = 'warn';

  async execute(msg, ...args) {
    if(!msg.member.hasPermission('BAN_MEMBERS') && !msg.member.hasPermission('KICK_MEMBERS')) return embed.send(`${msg.member}, you don't have permission to do that!`, '0xFF0000', msg.channel);
    
    const user = msg.mentions.users.first();

    var warnCount = await serverConfig.get(`${user.id}-${msg.guild.id}-WarnCount`);
    console.log(warnCount);

    warnCount++
    
    console.log(warnCount)

  }
}*/