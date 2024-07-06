// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toast } from 'react-toastify'

// import style from './style.module.css'
// import { loginUser } from '../../store/features/auth/authSlice'

// export const Login = () => {
// 	const h2 = style.h2
// 	const inpotbox = style.inputbox

// 	const [username, setUserName] = useState('')
// 	const [password, setPassword] = useState('')

// 	const { status } = useSelector(state => state.auth)
// 	const { succes } = useSelector(state => state.auth)

// 	const dispath = useDispatch()
// 	const navigate = useNavigate()

// 	useEffect(() => {
// 		if (status) {
// 			if (!succes) {
// 				return toast.error(status)
// 			}
// 			toast.success(status)
// 		}
// 	}, [status])

// 	const handleSubmit = () => {
// 		try {
// 			const authData = {
// 				username,
// 				password,
// 			}

// 			dispath(loginUser(authData))
// 			// console.log(username, password, email)

// 			// setEmail('')
// 			setUserName('')
// 			setPassword('')
// 		} catch (err) {
// 			console.log(err)
// 		}
// 	}

// 	return (
// 		<section className={style.section}>
// 			<div className={style.form_box}>
// 				<div className='form_value'>
// 					<form onSubmit={e => e.preventDefault()}>
// 						<h2 className={h2}>Login</h2>

// 						<div className={inpotbox}>
// 							<ion-icon name='person-outline'></ion-icon>
// 							<input
// 								value={username}
// 								onChange={e => setUserName(e.target.value)}
// 								type='text'
// 								required
// 							/>
// 							<label htmlFor=''>Login </label>
// 						</div>
// 						<div className={inpotbox}>
// 							<ion-icon name='lock-closed-outline'></ion-icon>
// 							<input
// 								value={password}
// 								onChange={e => setPassword(e.target.value)}
// 								type='password'
// 								required
// 							/>
// 							<label htmlFor=''>Password</label>
// 						</div>
// 						<button onClick={handleSubmit} className={style.button}>
// 							Log in
// 						</button>
// 						<div className={style.register}>
// 							<p>
// 								Нету аккаунта <NavLink to='/register'>регистрация</NavLink>.
// 							</p>
// 							<h3>Protected with HardID</h3>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
