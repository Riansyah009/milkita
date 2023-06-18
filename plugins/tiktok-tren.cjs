var handler = async (m, { text, conn }) => {
  const delay = time => new Promise(res => setTimeout(res,time))
  if (!text) throw 'negara mana cuba';
  let body = text.replace(/\s+/g, '+')
  let [t1, t2] = body.split`|`
  if (!/[0-9]/.test(t2)) throw ('only number')
  try {
    let response = await fetch(API('xzn','api/tttrending', {count: t2, region: t1}, 'apikey'))
    let wtf = await response.json()
    for ( let i of wtf) {
      conn.sendFile(m.chat, i.play, '', i.title, m)
      await delay(2000)
    }
  } catch (e) {
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['tiktoktren'];
handler.tags = ['tiktok'];

module.exports = handler;