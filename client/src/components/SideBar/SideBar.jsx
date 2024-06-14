import React from 'react'
import style from './style.module.css'

import { Link, NavLink } from 'react-router-dom'
import hardLogo from '../../image/hardLogo.png'

export const SideBar = () => {
	const activeLink = style.active
	const normalLink = style.a

	return (
		<div className={style.body}>
			<div className={style.container}>
				<section className={style.aside}>
					<div className={style.toggle}>
						<div className={style.logo}>
							<img className={style.img} src={hardLogo} />
							<h2 className={style.h2}>
								Hard<span className={style.danger}>Group</span>
							</h2>
						</div>
						<div className={style.close} id='close-btn'>
							<span className='material-icons-sharp'> close </span>
						</div>
					</div>

					<div className={style.sidebar}>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='admin.dashboard'
						>
							<span className='material-icons-sharp'> dashboard </span>
							<h3 className={style.h3}>Dashboard</h3>
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='admin.users'
						>
							<span className='material-icons-sharp'> person_outline </span>
							<h3 className={style.h3}>Users</h3>
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='admin.system'
						>
							<span className='material-icons-sharp'> info </span>
							<h3 className={style.h3}>System</h3>
						</NavLink>
						<a className={style.a} href='/'>
							<span className='material-icons-sharp'> home </span>
							<h3 className={style.h3}>Home</h3>
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}
