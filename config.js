import fs, {
	watchFile,
	unwatchFile
} from 'fs'
import {
	fileTypeFromBuffer,
	fileTypeStream
} from 'file-type'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'
import moment from 'moment-timezone'
import md5 from 'md5';
global.md5 = md5;
global.fromBuffer = fileTypeFromBuffer
global.stream = fileTypeStream
global.moment = moment
/*============= WAKTU =============*/
global.owner = [
	//  ['6281234288573'],
	['6282331033919'],
	['212706611366'],
	['6282256080304'],
	['6282188376948', 'Riin', false]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

global.packname = 'I ʜᴏᴘᴇ Yᴏᴜ\'ʀᴇ ғɪɴᴇ'
global.author = '@x7||skizo'
global.wm = '©xzn.wtf'
global.no_wallet = ''
global.nomorown = ''
global.xznkey = '' // chat atmin buat dapetin apikeynya
global.log = function log() {
	var args = [].slice.call(arguments);
	console.log.apply(console, args);
}
global.APIs = { // API Prefix
	// name: 'https://website'
	xzn: 'https://xzn.wtf/'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://xzn.wtf/': xznkey
}
// Function untuk menghitung keuntungan berdasarkan persentase
function calculateProfit(originalPrice, profitPercentage) {
  if (originalPrice <= 0 || profitPercentage <= 0) {
    return 0; // Mengembalikan 0 jika harga asli atau persentase keuntungan tidak valid
  }

  var profitAmount = (originalPrice * profitPercentage) / 100; // Menghitung jumlah keuntungan
  var totalPrice = originalPrice + profitAmount; // Menghitung harga total

  return {
    profitAmount: profitAmount,
    totalPrice: totalPrice
  };
}
global.getbuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
// profit via persentase
var file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})

function ucapan() {
	var time = moment.tz('Asia/Jakarta').format('HH')
	var res
	res = tiny("Selamat pagi ")
	if (time >= 4) {
		res = tiny("Selamat pagi ")
	}
	if (time > 10) {
		res = tiny("Selamat siang ")
	}
	if (time >= 15) {
		res = tiny("Selamat sore ")
	}
	if (time >= 18) {
		res = tiny("Selamat malam ")
	}
	return res
}

// Message filter
const usedCommandRecently = new Set()

/**
 * Check is number filtered.
 * @param {String} from 
 * @returns {Boolean}
 */
global.isFiltered = (from) => {
	return !!usedCommandRecently.has(from)
}

/**
 * Add number to filter.
 * @param {String} from 
 */
global.addFilter = (from) => {
	usedCommandRecently.add(from)
	setTimeout(() => {
		return usedCommandRecently.delete(from)
	}, 3000) // 5 seconds delay, I don't recommend below that.
}