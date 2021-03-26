import Command from './command.js';
import config from '../settings.json';
import { inspect } from 'util';
import { client, serverConfig } from '../index.js'; //needed for client.emit(); and db management DO NOT REMOVE

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

export default new class extends Command {
  name = 'eval';

  async execute(msg, ...args) {
    if (!msg.author.id === config.ownerID) return embed.send("⚠ Only the bot owner can do that!", '0xFF0000', msg.channel);
    
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      //msg.channel.send(inspect(evaled));
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      embed.send("⚠ There was an error during evaluation.", '0xFF0000', msg.channel);
    }
  }
}