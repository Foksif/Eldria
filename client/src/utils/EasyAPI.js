import axios from 'axios'
import { Py_BackEnd_Port } from '../configs/index'

const instance = axios.create({
	baseURL: `http://User-PC:${Py_BackEnd_Port}/api/v/1`,
})

instance.interceptors.request.use(config => {
	return config
})

export default instance
