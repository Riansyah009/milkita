var handler = async (m, { ctx, conn}) => {
  try {
    const uploadFile = require('../lib/uploadFile.cjs');
    let q = m.quoted ? m.quoted : m,
    mime = (q.msg || q).mimetype || ''
    if (/image/g.test(mime)) {
      let img = await uploadFile(await q.download())
      let bf = (await axios.get(API('xzn','api/toanime', {url: img}, 'apikey'), {responseType: 'arraybuffer'})).data
      await conn.sendMessage(m.chat, {image: bf, caption: '_iyh_'}, {quoted: m})
    } else throw `Send/reply an image`
  } catch (e) {
    m.reply(e.toString())
  }
};
handler.help = handler.command = ['toanime'];
handler.tags = ['weebs'];
module.exports = handler;