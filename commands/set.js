import Command from './command.js'
import { serverConfig } from '../index.js';

export default new class extends Command {
  name = 'set';

  async execute(msg, ...args) {
    if(!msg.guild.member(msg.author).hasPermission('MANAGE_SERVER')) return;

    const checkAutomodOnOff = await serverConfig.get(`${msg.guild.id}-AutomodSetting`);
    const badList = await serverConfig.get(`${msg.guild.id}-AutomodList`);
    
    switch(args[0]) {
      case "prefix":
        if (typeof args[1] === "string") {
          await serverConfig.set(`${msg.guild.id}-Prefix`, args[1]);
          msg.channel.send(`Successfully set prefix to \`${args[1]}\``);
        } else msg.channel.send(`Prefix is \`${await serverConfig.get(`${msg.guild.id}-prefix`) || globalPrefix}\``);
        break;

      case "automod":
        if(typeof args[1] === "string") {
          switch(args[1]) {
            case 'become':
              for(var i = 2; i < args.length; i++) {
                let badArray =+ [args[i]];
                console.log(badArray);
                await serverConfig.set(`${msg.guild.id}-AutomodList`, [badArray]);
              }
              break;

            case 'on':
              await serverConfig.set(`${msg.guild.id}-AutomodSetting`, true);
              break;

            case 'off':
              await serverConfig.set(`${msg.guild.id}-AutomodSetting`, false);
              break;
          }
        } else if(checkAutomodOnOff) msg.channel.send(`The forbidden words are \`${badList}\``);
        break;

      case "linkFilter":
        break;
    }
  }
}