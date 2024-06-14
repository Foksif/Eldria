import { Link, NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/features/auth/authSlice'
import { toast } from 'react-toastify'

import style from './style.module.css'

export const Register = () => {
	const h2 = style.h2
	const inpotbox = style.inputbox

	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [userError, setUserError] = useState(false)
	const [formValid, setFormValid] = useState(true)

	const { status } = useSelector(state => state.auth)
	const { succes } = useSelector(state => state.auth)

	const dispath = useDispatch()

	const userNameHandler = e => {
		setUserName(e.target.value)

		if (!e.target.value) {
			toast.error('Логин Не должен быть пустым!')
			setUserError(true)
		} else {
			setUserError(false)
		}
	}

	const emailHandler = e => {
		setEmail(e.target.value)

		if (!e.target.value) {
			toast.error('Емаил Не должен быть пустым!')
			setUserError(true)
		} else {
			setUserError(false)
		}
	}

	const passwordHandler = e => {
		setPassword(e.target.value)

		if (!e.target.value) {
			toast.error('Пароль Не должен быть пустым!')
			setUserError(true)
		} else {
			setUserError(false)
		}
	}

	useEffect(() => {
		if (status) {
			if (!succes) {
				return toast.error(status)
			}
			toast.success(status)
		}

		if (!userError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [status])

	const handleSubmit = () => {
		try {
			const authData = {
				email,
				username,
				password,
			}

			dispath(registerUser(authData))
			// console.log(username, password, email)

			setEmail('')
			setUserName('')
			setPassword('')
		} catch (err) {
			console.log(err)
		}
	}
	//

	return (
		<section className={style.section}>
			<div className={style.form_box}>
				<div className='form_value'>
					<form onSubmit={e => e.preventDefault()}>
						<h2 className={h2}>Register</h2>
						{/* EMAIL */}
						<div className={inpotbox}>
							<ion-icon name='mail-outline'></ion-icon>
							<input
								value={email}
								onChange={e => emailHandler(e)}
								type='text'
								required
							/>
							<label htmlFor=''>Email</label>
						</div>
						{/* USERNAME */}
						<div className={inpotbox}>
							<ion-icon name='person-outline'></ion-icon>
							<input
								value={username}
								onChange={e => userNameHandler(e)}
								type='text'
								required
							/>
							<label htmlFor=''>Login </label>
						</div>
						{/* PASSWORD */}
						<div className={inpotbox}>
							<ion-icon name='lock-closed-outline'></ion-icon>
							<input
								value={password}
								onChange={e => passwordHandler(e)}
								type='password'
								required
							/>
							<label htmlFor=''>Password</label>
						</div>
						<button
							// disabled={formValid}
							onClick={handleSubmit}
							className={style.button}
						>
							Register
						</button>
						<div className={style.register}>
							<p>
								Уже есть аккаунт <NavLink to='/login'>вход</NavLink>.
							</p>
							<h3>Protected with HardID</h3>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
