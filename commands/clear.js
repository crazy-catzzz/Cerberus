import Command from './command.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'clear';

  async execute(msg, ...args) {
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return embed.send("⚠ You don't have permission to do that!", '0xFF0000', msg.channel);
    
    if(isNaN(args[0]) || args[0] === undefined) return embed.send('⚠ Enter the amount of messages that you want to delete!', '0xFF0000', msg.channel);
    if(Number(args[0]) < 0) return embed.send('⚠ Enter a number higher than zero!', '0xFF0000', msg.channel);

    var amnt = Number(args[0]) > 100
      ? 101
      : Number(args[0]) + 1;
    
    if(amnt > 100) amnt = 100;

    msg.channel.bulkDelete(amnt, true)
      .then((_msg) => {
        embed.send(`:broom: Successfully cleared \`${_msg.size}\` messages!`, '0x45B200', msg.channel, true);
      })
  }
}