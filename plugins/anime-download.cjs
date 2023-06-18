var handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
    let wtf = await fetch(API('xzn','api/oploverzdl', {url: text }, 'apikey'));
    let fak = await wtf.json();
    let str = `Status: ${fak.status}\nTitle: ${fak.next}\n\n`
    let a = fak.download
    for (let i = 0; i < a.length; i++) {
      str += "*Format: " + a[i].format + '*\n'
 	    let b = a[i].resolutions
  	for (let i = 0; i < b.length; i++) {
  		str += "resolutions: " + b[i].name + '\n'
  		let c = b[i].servers
  	for (let i = 0; i < c.length; i++) {
  		str += "servers: " + c[i].name + '\n'
  		str += "url: " + c[i].link + '\n\n'
			}
		}		
   }
m.reply(str)
  } catch (e) {
    m.reply("mana gada hoax hoax")
  };
};
handler.help = handler.command = ['dlanime'];
handler.tags = ['anime'];

module.exports = handler;