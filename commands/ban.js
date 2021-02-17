import Command from './command.js';
import { MessageEmbed } from 'discord.js';

export default new class extends Command {
  name = 'ban';

  async execute(msg, ...args) {
    if(!msg.guild.member(msg.author).hasPermission('BAN_MEMBERS')) return;
    const user = msg.mentions.users.first();
    if(user) {
      const member = msg.guild.member(user);
      if(member) {
        /* get reason */
        const reason = args.join(' ').slice(args[0].length+1);

        /* create embed for DM */
        const bannedEmbed = new MessageEmbed()
          .setDescription(`${msg.author.username} banned you from **${msg.guild.name}**.`)
          .addFields(
            {name: 'Reason:', value: reason},
          )
          .setColor('0x0091F4');

        /* send DM */
        await user
          .send(bannedEmbed)
          .catch(err => {console.log(err)});
        
        /* ban member */
        member
          .ban({ reason: reason })
          .then(() => {
            const embed = new MessageEmbed()
              .setAuthor(msg.author.username, msg.author.avatarURL)
              .setDescription(`${msg.author} banned ${user}`)
              .addFields(
                {name: `Reason:`, value: reason},
              )
              .setColor('0x0091F4');
            msg.channel.send(embed);
          });
      } else msg.reply("The user isn't in this server!");
    } else msg.reply("You didn't mention the user to ban!");
  }
}
