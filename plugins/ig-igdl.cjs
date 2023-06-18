var handler = async (m, { text, conn }) => {
  if (!text) throw 'apakah itu sudah betul';
  let body = text.replace(/\s+/g, '+')
  try {
    let response = await fetch(API('xzn','api/igdl', {url: body}, 'apikey'))
    let wtf = await response.json()
    for ( let i of wtf.media ) {
      conn.sendFile(m.chat, i, '', wtf.caption, m)
    }
  } catch (e) {
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['igdl'];
handler.tags = ['instagram'];

module.exports = handler;