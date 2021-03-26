import Command from './command.js';
import config from '../settings.json';
import { inspect } from 'util';
import { client, serverConfig } from '../index.js'; //needed for client.emit(); and db management DO NOT REMOVE

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'join';

  async execute(msg, ...args) {
    if(msg.author.id !== config.ownerID) return;
    client.emit('guildMemberAdd', msg.member)
  }
}