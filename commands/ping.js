import Command from './command.js';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

import { client } from '../index.js';

export default new class extends Command {
  name = 'ping';

  async execute(msg, ...args) {
    embed.send(`🏓 Pong! Latency is \`${Date.now() - msg.createdTimestamp}ms\`. API Latency is \`${Math.round(client.ws.ping)}ms\``, '0x45B200', msg.channel);
  }
}