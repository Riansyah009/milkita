var handler = async (m, { text, conn }) => {
  if (!text) throw 'apa cuba';
  try {
  let wtf = await fetch(API('xzn','api/oploverz', {search: text }, 'apikey'));
  let fak = await wtf.json();
  let str = `_${fak.title}_\n\nStatus: ${fak.status}\nStudio: ${fak.studio}\n\n`;
  str += "*List Episode:*\n\n";
  let a = fak.list_episode;
  for (let i = 0; i < a.length; i++) {
    str += "Episode: " + a[i].episode + '\n';
    str += "Title: " + a[i].title + '\n';
    str += "Link: " + a[i].url + '\n\n';
  }
  conn.sendFile(m.chat, fak.poster, 'anu.jpg', str, m);
} catch (e) {
  m.reply("mana gada hoax hoax")
};
};
handler.help = handler.command = ['search'];
handler.tags = ['anime'];

module.exports = handler;