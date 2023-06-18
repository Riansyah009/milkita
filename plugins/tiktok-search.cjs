var handler = async (m, { text, conn }) => {
  if (!text) throw 'title nya apa cuba';
  let body = text.replace(/\s+/g, '+')
  let [t1, t2] = body.split`|`
  if (!/[0-9]/.test(t2)) throw ('only number')
  try {
    let response = await fetch(API('xzn','api/ttsearch', {count: t2, search: t1}, 'apikey'))
    let wtf = await response.json()
    for ( let i of wtf) {
       conn.sendFile(m.chat, i.play, '', i.title, m)
    }
  } catch (e) {
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['tiktoksrc'];
handler.tags = ['tiktok'];

module.exports = handler;