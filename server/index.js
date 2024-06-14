/*!
██████╗░██╗░░░██╗  ███████╗░█████╗░██╗░░██╗░██████╗░░░░░░░░░░░░███████╗
██╔══██╗╚██╗░██╔╝  ██╔════╝██╔══██╗██║░██╔╝██╔════╝░░░░░░░░░░░░██╔════╝
██████╦╝░╚████╔╝░  █████╗░░██║░░██║█████═╝░╚█████╗░░░░░░░░░░░░░█████╗░░
██╔══██╗░░╚██╔╝░░  ██╔══╝░░██║░░██║██╔═██╗░░╚═══██╗░░░░░░░░░░░░██╔══╝░░
██████╦╝░░░██║░░░  ██║░░░░░╚█████╔╝██║░╚██╗██████╔╝███████████╗██║░░░░░
╚═════╝░░░░╚═╝░░░  ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚═════╝░╚══════════╝╚═╝░░░░░
*/

import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import cors from 'cors'
// import { CorsOptions } from 'cors'
import morgan from 'morgan'

import authRouter from './routes/authRouter.js'
import postRouter from './routes/postRouter.js'
import statusRouter from './routes/statusRouter.js'
import forumRouter from './routes/forumRouter.js'
import easyRouter from './routes/easeRouter.js'
import { SERVER_PORT, DB_URL } from './configs/config.js'

const PORT = SERVER_PORT || 7070
const app = express()

const corsOptions = {
	origin: '*',
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use('/static', express.static('static'))
app.use(fileUpload({}))

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/stats', statusRouter)
app.use('/api/forum', forumRouter)
app.use('/api/donate', easyRouter)

app.get('/', (req, res) => {
	res.send('ServerWork')
})

const start = async () => {
	try {
		await mongoose.connect(DB_URL)
		// await mongoose.disconnect() - DEBUG

		app.listen(PORT, () => {
			console.log('##########################################################')
			console.log('#####             ▶  STARTING SERVER  ◀              #####')
			console.log('##########################################################')
			console.log('')
			console.log('Express running → PORT: ' + PORT)
			console.log('MongoDB connected')
		})
	} catch (err) {
		console.log(err)
	}
}

start()
