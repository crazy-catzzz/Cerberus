import Command from './command.js';
import config from '../settings.json';
import { inspect } from 'util';
import { serverConfig } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'unbotban';

  async execute(msg, ...args) {
    if (!msg.author.id === config.ownerID) return embed.send("⚠ Only the bot owner can do that!", '0xFF0000', msg.channel);
    
    const unbannedUser = msg.mentions.users.first();
    if(!unbannedUser) return embed.send("⚠ You didn't mention a user to unban!", '0xFF0000', msg.channel);
    
    const unbannedID = unbannedUser.id;

    if(unbannedID === msg.author.id) return embed.send("⚠ You can't unban yourself!", '0xFF0000', msg.channel);

    embed.send(`Successfully bot-unbanned ${unbannedUser}.`, '0x45B200', msg.channel);
    await serverConfig.delete(`${unbannedID}-banned`);
  }
}