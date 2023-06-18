/*const handler = async (m, { text, conn }) => {
  if (!text) throw 'Apakah itu sudah benar?';
  const body = text.replace(/\s+/g, '+');
  try {
    const response = await fetch(API('xzn','api/igstory', {q: body}, 'apikey'));
    const wtf = await response.json();
    for (const i of wtf) {
      conn.sendFile(m.chat, i.image_versions2.candidates[0].url, '', 'jd', m);
    }
  } catch (e) {
    throw e;
  }
};

handler.help = handler.command = ['igstory'];
handler.tags = ['instagram'];

module.exports = handler;*/
