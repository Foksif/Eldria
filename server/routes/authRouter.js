import { Router } from 'express'
import authController from '../controllers/authController.js'
import { check } from 'express-validator'
import authMidleware from '../middleware/authMidleware.js'
import { registerValidator } from '../validation/index.js'
import roleMidleware from '../middleware/roleMidleware.js'
import cors from 'cors'

const router = new Router()

router.post('/register', cors(), registerValidator, authController.register)
router.post('/login', cors(), authController.login)
router.post('/addrole', cors(), authController.addrole)
router.get('/users', cors(), authController.getUsers)
router.get('/getme', cors(), authMidleware, authController.getMe)
router.delete('/users', cors(), roleMidleware(true), authController.deleteUsers)

export default router
