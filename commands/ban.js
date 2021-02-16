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
        const channel = msg.channel;
        const reason = args[1];
        member
          .ban({ reason: reason })
          .then(() => {
            const embed = new MessageEmbed()
              .setAuthor(msg.guild.member(msg.author), msg.author.avatarURL)
              .setDescription(`${msg.author} banned ${user}`)
              .addFields(
                {name: `reason:`, value: reason}
                )
              .setColor('0x0091F4');
            channel.send(embed);
          });
        user.send(`${msg.author} banned you from ${msg.guild.name} for ${reason}`);
      } else msg.reply("The user isn't in this server!");
    } else msg.reply("You didn't mention the user to ban!")
  }
}