export class Automod {

  async check(msg, badwords) {
    console.log(msg.content)

    const messageContent = msg.content.split(' ')
    for(var i = 0; i < badwords.length; i++) {
      console.log(msg.content)
      if (msg.content.includes(badwords[i])) {
        console.log(messageContent)
        msg
          .delete({timeout: 1})
          .catch(err => {
            console.error(err)
          });
        console.log(msg.content)
      }
    }
  };
};