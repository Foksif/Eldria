import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import style from './style.module.css'
import { loginUser } from '../../store/features/auth/authSlice'

export const Login = () => {
	const searchParamsId = new URLSearchParams(window.location.search)
	const paramid = searchParamsId.get('id')

	const searchParams = new URLSearchParams(window.location.search)
	const messageValue = searchParams.get('message')

	if (paramid == 0) {
		toast.warning(messageValue)
	} else if (paramid == 1) {
		toast.success(messageValue)
	} else if (paramid == 2) {
		toast.error(messageValue)
	} else {
	}

	const h2 = style.h2
	const inpotbox = style.inputbox

	const { status, succes } = useSelector(state => state.auth)

	const dispath = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onSubmit',
	})

	useEffect(() => {
		const asFunk = async () => {
			if (status) {
				if (!succes) {
					return toast.error(status)
				}

				window.location.href = '/?id=1&message=' + status
			}
		}
		asFunk()
	}, [status])

	try {
		try {
			if (errors.username.message) {
				toast.error(errors.username.message)
			}
		} catch (error) {}
		try {
			if (errors.password.message) {
				toast.error(errors.password.message)
			}
		} catch (error) {}
	} catch (error) {
		toast.error('Возникла проблема с валидацией формы')
	}

	const onSubmit = data => {
		try {
			dispath(loginUser(data))
			reset()
		} catch (error) {}
	}

	return (
		<section className={style.section}>
			<div className={style.form_box}>
				<div className='form_value'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className={h2}>Login</h2>

						<div className={inpotbox}>
							<ion-icon name='person-outline'></ion-icon>
							<input
								{...register('username', {
									required: "Поле 'Login' обязательно для заполнения",
								})}
								type='text'
							/>
							<label htmlFor=''>Login </label>
						</div>
						<div className={inpotbox}>
							<ion-icon name='lock-closed-outline'></ion-icon>
							<input
								{...register('password', {
									required: "Поле 'Password' обязательно для заполнения",
									minLength: {
										value: 5,
										message: 'Пароль должен быть от 5 и до 40 символов',
									},
									maxLength: {
										value: 60,
										message: 'Пароль должен быть от 5 и до 40 символов',
									},
								})}
								type='password'
							/>
							<label htmlFor=''>Password</label>
						</div>
						<input value='Log In' type='submit' className={style.button} />
						<div className={style.register}>
							<p>
								Нету аккаунта <NavLink to='/register'>регистрация</NavLink>.
							</p>
							<h3>Protected with HardID</h3>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
