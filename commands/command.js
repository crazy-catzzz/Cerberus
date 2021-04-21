export default class Command {
  name = '';
  nsfw = false;

  execute(msg, ...args) {
    throw new TypeError('Command not implemented.');
  }
}