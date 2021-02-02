const downloadYT = require('ytdl-core');
const searchYT = require('yt-search');

async function play(message, ...args) {
  const vc = message.member.voice.channel;

  const connection = await vc.join();
  const video = await findVideo(args.join(' '));

  if(video) {
    const stream = downloadYT(video.url, { filter: 'audioonly'});
    connection.play(stream, { seek: 0, volume: 0.75});

    await message.reply(`Now playing \`${video.title}\`!`);
  } else
    await message.reply(`No results found :(`);
}
async function findVideo(query) {
  const result = await searchYT(query)
  return(result.videos.length > 1)
    ? result.videos[0]
    : null;
}

async function stop(message) {
  const vc = message.member.voice.channel;
  await vc.leave();

  await message.reply('I stopped the party...');
}

module.exports.play = play;
module.exports.stop = stop;