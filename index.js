console.log('Starting...')

import {
	join,
	dirname
} from 'path'
import {
	createRequire
} from 'module'
import {
	fileURLToPath
} from 'url'
import {
	setupMaster,
	fork
} from 'cluster'
import {
	watchFile,
	unwatchFile
} from 'fs'
import cfonts from 'cfonts';
import {
	createInterface
} from 'readline'
// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(
	import.meta.url))
console.log({import:import.meta.url,path:fileURLToPath(import.meta.url) })
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const {
	name,
	author
} = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const {
	say
} = cfonts
const rl = createInterface(process.stdin, process.stdout)
import yargs from 'yargs';
say(`ANTI-BOT-TOPUP`, {
	font: 'shade',
	align: 'center',
	gradient: ['#12c2e9', '#c471ed'],
	transitionGradient: true,
	letterSpacing: 3,
});
say(`'ANTI' Coded By Ghost19-UI`, {
	font: 'console',
	align: 'center',
	gradient: ['#DCE35B', '#45B649'],
	transitionGradient: true,
});

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
	if (isRunning) return
	isRunning = true
	let args = [join(__dirname, file), ...process.argv.slice(2)]
	say([process.argv[0], ...args].join(' '), {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
	})
	setupMaster({
		exec: args[0],
		args: args.slice(1),
	})
	let p = fork()
	p.on('message', data => {
		console.log('[RECEIVED]', data)
		switch (data) {
			case 'reset':
				p.process.kill()
				isRunning = false
				start.apply(this, arguments)
				break
			case 'uptime':
				p.send(process.uptime())
				break
		}
	})
	p.on('exit', (_, code) => {
		isRunning = false
		console.error('Exited with code:', code)
		if (code === 0) return
		watchFile(args[0], () => {
			unwatchFile(args[0])
			start(file)
		})
	})

	let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	if (!opts['test'])
		if (!rl.listenerCount()) rl.on('line', line => {
			p.emit('message', line.trim())
		})
	// console.log(p)
}

start('main.js')
