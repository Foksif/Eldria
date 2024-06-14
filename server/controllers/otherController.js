import {
	totalRamUtils,
	usingRamUtils,
	procentRamUtils,
} from '../utils/ramUtils.js'
// import Role from '../models/Role.js'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

import { Author, version, ProjectName, secretToken } from '../configs/config.js'

class otherController {
	info(req, res) {
		res.status(200).json({
			author: Author,
			version: version,
			projectname: ProjectName,
			hyperid_connect: false,
		})
	}

	system(req, res) {
		try {
			const totalRam = totalRamUtils()
			const usingmem = usingRamUtils()
			const procentram = procentRamUtils()

			res.json({
				totalmem: totalRam,
				using: usingmem,
				procent: procentram + '%',
			})
		} catch (err) {}
	}

	async secret(req, res) {
		try {
			const levl = req.params.levl
			// console.log('DEBUG: OK nen') - DEBUG

			if (levl == 0) {
				//
				// Create defaul roles
				// Request: http://<hostName:port>/api/stats/secret/0
				//

				// console.log('DEBUG: OK zero') - DEBUG
				// const checuse = await Role.findOne({ value: false }) // validation
				// const checadm = await Role.findOne({ value: true }) // validation

				// if (checuse || checadm) {
				// 	return res.status(400).json({
				// 		message: 'Роли уже были созданы, повторное создание невозможно!',
				// 	})
				// }

				// const userRole = new Role()
				// const adminRole = new Role({ value: true })

				// await userRole.save()
				// await adminRole.save()

				return res.json({
					message: 'Функция больше недоступна',
				})
			} else if (levl == 1) {
				//
				// Create root account
				// Request: http://<hostName:port>/api/stats/secret/1
				//

				// console.log('DEBUG: OK one') - DEBUG
				const checroot = await User.findOne({ username: 'root' })
				// return res.json(checroot)
				if (checroot) {
					return res
						.status(400)
						.json({ message: 'ROOT Аккаунт уже существует' })
				}

				const hashPassword = bcrypt.hashSync(secretToken, 7)
				const user = new User({
					username: 'root',
					email: 'root@root.rt',
					password: hashPassword,
					isAdmin: true,
				})
				await user.save()
				return res.status(200).json({
					message: 'Иницилизация ROOT аккаунта завершенна',
					login: 'root',
					password: secretToken,
				})
			} else if (levl == 3) {
				return res.json({ message: 'Функция в разработке' })
			} else {
				return res
					.status(400)
					.json({ message: 'Нету идентефикатра под уровнем ' + levl })
			}
		} catch (err) {
			console.log(err)
			res
				.status(500)
				.json({ message: 'Internal server error 6:3 (OtherController)' })
		}
	}
}

export default new otherController()
