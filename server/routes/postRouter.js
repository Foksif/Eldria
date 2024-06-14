import { Router } from 'express'
import { check } from 'express-validator'
import roleMidleware from '../middleware/roleMidleware.js'
import postController from '../controllers/postController.js'
const router = new Router()

router.post('/post', postController.create)
router.get('/post', postController.getAll)
router.get('/post/:id', postController.getOne)
router.put('/post', postController.update)
router.delete('/postd', roleMidleware(true), postController.delete)

export default router
