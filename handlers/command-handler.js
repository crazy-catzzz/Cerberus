import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
const embed = new DefaultEmbed();

import { readdirSync } from 'fs';
import { resolve } from 'path';
import config from '../settings.json';


export class CommandHandler {
  commands = new Map();

  async init() {
    const commandsPath = resolve('./commands');
    const files = readdirSync(commandsPath);

    for (const file of files) {
      const { default: command } = await import(`../commands/${file}`);
      if (!command?.name) continue;

      this.commands.set(command.name, command);
    }
    console.log(`Loaded ${this.commands.size} commands`);
  }

  async handle(msg, prefix) {
    try {
      const args = msg.content
        .split(' ')
        .slice(1);

      const commandName = msg.content
        .split(' ')[0]
        .slice(prefix.length);

      const command = this.commands.get(commandName);

      if(command?.nsfw && !msg.channel.nsfw) 
        return embed.send(`⚠ This command can only be ran in a NSFW channel.`, '0xFF0000', msg.channel);

      await command?.execute(msg, ...args); 
    } catch (error) {
      await msg.channel.send(`⚠ ${error?.message}`);
    }
  }
}