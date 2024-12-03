import axios from 'axios'
import { BackEnd_Port } from '../configs/index'

const instance = axios.create({
	baseURL: 'http://localhost:' + BackEnd_Port + '/api',
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')

	return config
})

export default instance
