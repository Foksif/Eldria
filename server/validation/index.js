import { body } from 'express-validator'

export const registerValidator = [
	body('username', 'Имя пользователя не может быть пустым.').notEmpty(),
	body('email', 'E-Mail не может быть пустым.').notEmpty(),
	body('password', 'Пароль не может быть пустым').notEmpty(),
	body(
		'password',
		'Пароль должден быть больше 4 и не меньше 20 символов'
	).isLength({ min: 4, max: 20 }),
]

export const forumValidator = [
	body('title', 'Введите заголвок статьи').isLength({ min: 3 }).isString(),
	body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
	body('tags', 'Неверный формат тегов (Укажите массив)').optional().isString(),
	body('imageURL', 'Неверная ссылка на изображение').optional().isString(),
]
