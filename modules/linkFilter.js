export class LinkFilter {

  check(msg, badLinks) {
    for(var i = 0; i < badLinks.length; i++) {
      if(msg.content.includes(badLinks[i])) {
        msg
          .delete({ timeout: 1 })
          .catch(err => console.error(err))
      }
    }
  };
};