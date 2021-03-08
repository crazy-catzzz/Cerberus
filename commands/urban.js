import Command from './command.js';

import fetch from 'node-fetch';
import querystring from 'querystring';

import { DefaultEmbed } from '../content/embeds/defaultEmbed.js';
import { UrbanEmbed } from '../content/embeds/urbanEmbed.js';
const embed = new DefaultEmbed();
const urbanEmbed = new UrbanEmbed();

export default new class extends Command {
  name = 'urban';

  async execute(msg, ...args) {
    if (!args.length) return embed.send('You need to supply a search term!', '0xFF0000', msg.channel);

    const query = querystring.stringify({ term: args.join(' ') }); //get the search term from the message
    
    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json()); //search the word

    if(!list.length) return embed.send(`No results found for **${args.join(' ')}**.`, '0xFF0000', msg.channel);
    
    const [answer] = list;

    if(!answer.word || !answer.permalink || !answer.definition || !answer.example || !answer.thumbs_up || !answer.thumbs_down) return embed.send('Unfortunately, this word will return an error.', '0xFF0000', msg.channel); //If this is removed words like "hacker" will crash the bot :)

    urbanEmbed.send(answer.word, answer.permalink, answer.definition, answer.example, answer.thumbs_up, answer.thumbs_down, msg.channel);
  }
}