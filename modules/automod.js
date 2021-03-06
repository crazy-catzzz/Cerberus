export class Automod {

  check(msg, badwords) {
    for(var i = 0; i < badwords.length; i++) {
      if(msg.content.includes(badwords[i])) {
        msg
          .delete({ timeout: 1 })
          .catch(err => console.error(err));
      }
    }
  };
};