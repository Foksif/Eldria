import { Router } from 'express'
const router = new Router()
import otherController from '../controllers/otherController.js'
import PairingMidleware from '../middleware/PairingMidleware.js'
import roleMidleware from '../middleware/roleMidleware.js'
import secretMidleware from '../middleware/secretMidleware.js'
// PairingMidleware,
router.get('/info', otherController.info)
router.get(
	'/system',
	PairingMidleware,
	roleMidleware(true),
	otherController.system
)
// router.get('/secret/:levl', secretMidleware, otherController.secret)
router.get('/secret/:levl', otherController.secret)

export default router
