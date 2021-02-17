import Command from './command.js';
import { MessageEmbed } from 'discord.js';

export default new class extends Command {
  name = 'kick';

  async execute(msg, ...args) {
    if(!msg.guild.member(msg.author).hasPermission('KICK_MEMBERS')) return;
    const user = msg.mentions.users.first();
    var reason;
    if(user) {
      const member = msg.guild.member(user);
      if(member) {
        /* get reason */ //UNDER DEVELOPMENT
        for(var x = 0;x <= args.length-1;x++)
        {
          if(x => 1)
            reason+=args[x]
          
        }

        /* send DM */
        await user
          .send(`${msg.author.username} kicked you from **${msg.guild.name}** for: ${reason}`)
          .catch(err => {console.log(err)});
        
        /* kick member */
        member
          .kick({ reason: reason })
          .then(() => {
            const embed = new MessageEmbed()
              .setAuthor(msg.author.username, msg.author.avatarURL)
              .setDescription(`${msg.author} kicked ${user}`)
              .addFields(
                {name: `reason:`, value: reason},
                )
              .setColor('0x0091F4');
            msg.channel.send(embed);
          });
      } else msg.reply("The user isn't in this server!");
    } else msg.reply("You didn't mention the user to ban!");
  }
}
