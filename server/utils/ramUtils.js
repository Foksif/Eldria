import os from 'node:os'

export const totalRamUtils = () => {
	const totalmemory = os.totalmem()

	const format = (bytes, decimals = 2, k = 1024) => {
		let i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
	}

	return format(totalmemory)
}

export const usingRamUtils = () => {
	const totalmemory = os.totalmem()
	const freememory = os.freemem()

	const format = (bytes, decimals = 2, k = 1024) => {
		let i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
	}

	let using = format(totalmemory - freememory)
	return using
}

export const procentRamUtils = () => {
	const format = (bytes, decimals = 2, k = 1024) => {
		let i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
	}

	const pocent = (a, b) => {
		if (!a || !b) {
			return 'Нет данных'
		} else {
			let num = (a / b) * 100
			return num
		}
	}

	const totalmemory = os.totalmem()
	const freemem = os.freemem()
	let using = format(totalmemory - freemem)
	let out = Math.floor(pocent(using, format(totalmemory)))

	return out
}
