import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.minetools.eu/',
})

instance.interceptors.request.use(config => {
	return config
})

export default instance
