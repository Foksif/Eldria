import { Router } from 'express'
import forumController from '../controllers/forumController.js'
import authMidleware from '../middleware/authMidleware.js'
const router = new Router()

router.get('/posts', forumController.getAll)
router.get('/posts/:id', forumController.getOne)
router.post('/posts', authMidleware, forumController.create)
router.patch('/posts')
router.delete('/posts')

export default router
