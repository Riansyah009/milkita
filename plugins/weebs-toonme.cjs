var handler = async (m, { ctx, conn}) => {
  try {
    const uploadFile = require('../lib/uploadFile.cjs');
    let q = m.quoted ? m.quoted : m,
    mime = (q.msg || q).mimetype || ''
    if (/image/g.test(mime)) {
      let img = await uploadFile(await q.download())
      let xzn = await fetch(API('xzn','api/aitoonme', {url: img}, 'apikey'))
      let wtf = await xzn.json();
      let bf = (await axios.get(wtf.url, {responseType: 'arraybuffer'})).data
      await conn.sendMessage(m.chat, {image: bf, caption: '_iyh_'}, {quoted: m})
    } else throw `Send/reply an image`
  } catch (e) {
    m.reply("maaf err tergantung amal dan ibadah masing masing")
  }
};
handler.help = handler.command = ['filter'];
handler.tags = ['weebs'];
handler.premium = true
module.exports = handler;