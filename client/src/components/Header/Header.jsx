import { useDispatch, useSelector } from 'react-redux'
import HeaderCSS from './Header.module.css'
import './styleHeader.css'
import { Link, NavLink } from 'react-router-dom'
import { checkIsAuth, logout } from '../../store/features/auth/authSlice'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { projectName } from '../../configs'

import { CgProfile } from '@react-icons/all-files/cg/CgProfile'
import { IoMdExit } from '@react-icons/all-files/io/IoMdExit'

export const Header = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(checkIsAuth)
	const isAdmin = useSelector(state => state.auth.isAdmin)
	const { username } = useSelector(state => state.auth)
	// const isAdmin = false
	// console.log(isAdmin) - DEBUG

	// const isAdmin = roles.findIndex(role => roles === 'false') && true
	// console.log(isAdmin)

	// if (isAdmin) {
	// 	console.log('ADMIN')
	// } else {
	// 	console.log(false)
	// }

	const activeLink = HeaderCSS.nav__link_active
	const normalLink = HeaderCSS.nav__link

	const avatarUrl = 'https://visage.surgeplay.com/face/20/' + username

	const logoutHandler = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
		toast('Вы вышли из системы')
	}

	const [isOpen, setOpen] = useState(false)

	const menuActive = HeaderCSS.menu + isOpen ? HeaderCSS.active : ''

	const company_name = projectName

	return (
		<header className={HeaderCSS.header}>
			<div className='container'>
				<div className={HeaderCSS.header__inner}>
					<div className={HeaderCSS.header__block}>
						<h1 className={HeaderCSS.header__block_server}>
							<span className={HeaderCSS.header__block_server_span}>
								{company_name.substring(2, 0)}
							</span>
							{company_name.substring(2)}
						</h1>
					</div>

					<div
						className={({ isActive }) => (isActive ? activeLink : normalLink)}
					>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/'
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/store'
						>
							Store
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/forum'
						>
							Forum
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/news'
						>
							News
						</NavLink>
						{isAdmin ? (
							<a className={normalLink} href='/admin.dashboard'>
								Admin
							</a>
						) : undefined}
					</div>

					<div className={HeaderCSS.header__block}>
						{isAuth ? (
							<>
								{/* <button
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
									onClick={logoutHandler}
								>
									LOG OUT
								</button> */}
								<div>
									<button
										onClick={() => setOpen(!isOpen)}
										className={`user__avatar + ${
											isOpen ? 'avatar__active' : ''
										}`}
									>
										<img className='user__avatar.img' src={avatarUrl} alt='' />
									</button>
								</div>
								<nav className={`menu + ${isOpen ? 'active' : ''}`}>
									<ul className='menu__list'>
										<li className='menu__item'>
											<CgProfile className='iconB' />
											<NavLink className='menu__item_link' to='/profile'>
												Profile
											</NavLink>
										</li>
										<li className='menu__item'>
											<IoMdExit className='iconB' />
											<button onClick={logoutHandler}>LogOut</button>
										</li>
									</ul>
								</nav>
							</>
						) : (
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
								to='/login'
							>
								LOG IN
							</NavLink>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
