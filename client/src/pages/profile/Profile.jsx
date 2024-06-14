import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { IoMdExit } from '@react-icons/all-files/io/IoMdExit'
import { logout } from '../../store/features/auth/authSlice'

import DefaultButton from '../../UI/button/DefaukButton'
import style from './style.module.css'

export const Profile = () => {
	const dispatch = useDispatch()

	const { username, email } = useSelector(state => state.auth)
	const avatarUrl = 'https://visage.surgeplay.com/face/120/' + username
	const isAdmin = useSelector(state => state.auth.isAdmin)

	const logoutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
		toast('Вы вышли из системы')
	}

	return (
		<section>
			<div className='container'>
				<div className={style.inner}>
					<div className={style.block}>
						<h1>Профиль</h1>

						<div className={style.block__inner}>
							<div className={style.block__img}>
								<img src={avatarUrl} alt='' />
							</div>
						</div>
						<div className={style.block__inner}>
							<div className={style.info__block}>
								<h3>
									Login: <h2>{username}</h2>
								</h3>
								<h3>
									E-Mail: <h2>{email}</h2>
								</h3>
							</div>
						</div>
						<div className={style.block__inner}>
							<div className={style.info__block}>
								<h3>
									Статус аккаунта: <h2>{isAdmin ? 'ADMIN' : 'USER'}</h2>
								</h3>
								<DefaultButton onClick={logoutHandler}>
									<IoMdExit className={style.icon} /> LogOut
								</DefaultButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
