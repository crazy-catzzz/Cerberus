import Command from './command.js';
import config from '../settings.json';
import { inspect } from 'util';
import { serverConfig } from '../index.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'botban';

  async execute(msg, ...args) {
    if (!msg.author.id === config.ownerID) return embed.send("⚠ Only the bot owner can do that!", '0xFF0000', msg.channel);
    
    const bannedUser = msg.mentions.users.first();
    if(!bannedUser) return embed.send("⚠ You didn't mention a user to ban!", '0xFF0000', msg.channel);
    
    const bannedID = bannedUser.id;

    if(bannedID === msg.author.id) return embed.send("⚠ You can't ban yourself!", '0xFF0000', msg.channel);

    embed.send(`Successfully bot-banned ${bannedUser}.`, '0x45B200', msg.channel);
    await serverConfig.set(`${bannedID}-banned`, true);
  }
}