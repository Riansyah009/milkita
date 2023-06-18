var handler = async (m, { text, conn }) => {
  if (!text) throw 'perihal apa cuba';
  let body = text.replace(/\s+/g, '+')
  try {
    let response = await fetch(API('xzn','api/openai', {text: text}, 'apikey'))
    let rep = await response.json();
    conn.reply(m.chat, rep.result, m)
  } catch (e) {
    throw e.toString();
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['ask'];
handler.tags = ['tools'];

module.exports = handler;