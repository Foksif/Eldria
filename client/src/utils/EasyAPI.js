import axios from 'axios'
import { EasyURL, Shop_Key } from '../configs'

const instance = axios.create({
	baseURL: EasyURL,
})

instance.interceptors.request.use(config => {
	return config
})

export default instance
