export class RandomColor {
  async create() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const redHex = red.toString(16);
    const greenHex = green.toString(16);
    const blueHex = blue.toString(16);

    const randomColor = `0x${redHex}${greenHex}${blueHex}`;
    return randomColor;
  }
}
