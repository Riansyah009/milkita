var handler = async (m, { ctx, conn}) => {
  try {
    const uploadFile = require('../lib/uploadFile.cjs');
    let q = m.quoted ? m.quoted : m,
    mime = (q.msg || q).mimetype || ''
    if (/image/g.test(mime)) {
      let img = await uploadFile(await q.download())
      conn.sendFile(m.chat, API('xzn','api/aiscene', {url: img}, 'apikey'), '', '_iyh_', m)
    } else throw `Send/reply an image`
  } catch (e) {
    m.reply(e.toString())
  }
};
handler.help = handler.command = ['aiscene'];
handler.tags = ['weebs'];
handler.premium = true
module.exports = handler;