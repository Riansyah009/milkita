var handler = async (m, { ctx, text, conn, command}) => {
  if (!text) throw 'perihal apa'
  try {
    const uploadFile = require('../lib/uploadFile.cjs');
    let q = m.quoted ? m.quoted : m,
    mime = (q.msg || q).mimetype || ''
    if (/image/g.test(mime)) {
      let img = await uploadFile(await q.download())
let xzn
m.reply('_baik sir, gambar semdang di pruses..._')
switch(command){
case 'mirror': 
      xzn = await fetch(API('xzn','api/aimirror', {url: img, filter: text}, 'apikey'))
break;
}
      let wtf = await xzn.json();
      if(wtf.status !== 200) throw wtf
      conn.sendFile(m.chat, await getbuffer(wtf.generated_image_addresses.getRandom()), '.jpg', 'iyh',m)
      
    } else throw `Send/reply an image`
  } catch (e) {
    throw e
  }
};
handler.help = handler.command = ['mirror'];
handler.tags = ['weebs'];
handler.premium = true
module.exports = handler;