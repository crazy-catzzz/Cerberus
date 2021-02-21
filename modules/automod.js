import { readdirSync } from 'fs';
import { resolve } from 'path';
import config from '../settings.json';

export class Automod {

  async check() {
    for (var i = 0; i < Config.badwords.length; i++) {
      if (message.content.includes(Config.badwords[i])) {

      let member = message.member;

      message
        .delete({timeout: 1})
        .catch(err => {
          console.error(err)
        });
        break;
      }
    };
  };

}