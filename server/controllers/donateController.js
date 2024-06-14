import request from 'request'

const priceData = () => {
	const options = {
		url: 'https://easydonate.ru/api/v3/shop/products',
		headers: {
			'Shop-Key': 'c82eb9940ab9fd29b0c4e2323512a7b8',
		},
	}

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			const info = JSON.parse(body)
			return info
		}
	}

	return request(options, callback)
}

class otherController {
	async getPrice(req, res) {
		await console.log(priceData())
	}
}

export default new otherController()
