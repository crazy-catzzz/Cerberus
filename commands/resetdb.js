import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';
import { serverConfig } from '../index.js';

export default new class extends Command {
  name = 'resetdb';

  async execute(msg, ...args) { 
    console.log(msg.author.id === config.ownerID)
    if(msg.author.id === config.ownerID) {
      serverConfig.list().then(keys => {
        for(var i = 0; i < keys.length; i++) {
          serverConfig.delete(keys[i]);
        };
        msg.channel.send("Successfully reset Database!");
      });
    } else msg.channel.send("Only the bot owner can do that!");
  }
}