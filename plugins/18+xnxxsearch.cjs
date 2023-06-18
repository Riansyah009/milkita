var handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
    let response = await fetch(API('xzn','api/xnxxsearch', {title: text }, 'apikey'))
    let wtf = await response.json()
    let str = '*Pemersatu Bangsa*\n\n';
  for (let i = 0; i < wtf.length; i++) {
    str += "title: " + wtf[i].title + '\n';
    str += "link: " + wtf[i].link + '\n\n';
    }
    m.reply(str)
  } catch (e) {
    m.reply("gada anjing typo lu memek")
  };
};
handler.help = handler.command = ['xnsearch'];
handler.tags = ['18+'];

module.exports = handler;