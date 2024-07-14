import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { registerUser } from '../../store/features/auth/authSlice'

import style from './style.module.css'

export const Register = () => {
	const h2 = style.h2
	const inpotbox = style.inputbox
	//

	const dispath = useDispatch()
	const { status, succes } = useSelector(state => state.auth)

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
				window.location.href = '/login?id=1&message' + status
				toast.success(status)
			}
		}
		asFunk()
	}, [status])

	const onSubmit = data => {
		try {
			dispath(registerUser(data))
			reset()
		} catch (error) {}
	}

	try {
		try {
			if (errors.email.message || false) {
				toast.error(errors.email.message)
			}
		} catch (error) {}

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

	return (
		<section className={style.section}>
			<div className={style.form_box}>
				<div className='form_value'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className={h2}>Register</h2>
						{/* EMAIL */}
						<div className={inpotbox}>
							<ion-icon name='mail-outline'></ion-icon>

							<input
								{...register('email', {
									required: "Поле 'E-MAIL' обязательно для заполнения",
									pattern: {
										value:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Поле E-Mail Invalid',
									},
								})}
							/>

							<label htmlFor=''>Email</label>
						</div>
						{/* USERNAME */}
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
						{/* PASSWORD */}
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
						<input value='Register' type='submit' className={style.button} />

						<div className={style.register}>
							<p>
								Уже есть аккаунт <NavLink to='/login'>вход</NavLink>.
							</p>
							<h3>Protected with HardID</h3>
							{/* <div>
								{errors?.email && (
									<p style={{ color: 'red' }}>
										{errors?.email?.message || 'Непредвиденная ошибка!'}
									</p>
								)}
								{errors?.username && (
									<p style={{ color: 'red' }}>
										{errors?.username?.message || 'Непредвиденная ошибка!'}
									</p>
								)}
							</div> */}
							{/* <h3> Protected with HardID</h3> */}
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
