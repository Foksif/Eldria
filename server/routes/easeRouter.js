import { Router } from 'express'
import donateController from '../controllers/donateController.js'
const router = new Router()

router.get('/price', donateController.getPrice)

export default router
