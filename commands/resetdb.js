import Command from './command.js';
import { MessageEmbed } from 'discord.js';
import config from '../settings.json';
import { prefixes, automodOnOff, automodList } from '../index.js';

export default new class extends Command {
  name = 'resetdb';

  async execute(msg, ...args) { 
    console.log(msg.author.id === config.ownerID)
    if(msg.author.id === config.ownerID) {
      prefixes.list().then(keys => {
        console.log(keys);
        for(var i = 0; i < keys.length; i++) {
          prefixes.delete(keys[i]);
        }
    
      })
    } else msg.channel.send("Only the bot owner can do that!")
  }
}