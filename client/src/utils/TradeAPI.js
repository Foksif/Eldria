import axios from 'axios'
import { T_Shop_Key } from '../configs/index'

const instance = axios.create({
	baseURL: 'https://api.trademc.org/shop.',
})

instance.interceptors.request.use(config => {
	return config
})

export default instance
