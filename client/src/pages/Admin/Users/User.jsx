import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import hardLogo from '../../../image/hardLogo.png'
import axios from '../../../utils/axios'
import { toast } from 'react-toastify'
import { version, projectName } from '../../../configs'

// const filterUsers = (searchText, listOfUsers) => {
// 	if (!searchText) {
// 		transphere()
// 		return listOfUsers
// 	}
// 	return listOfUsers.filter(({ username }) =>
// 		username.toLowerCase().includes(searchText.toLowerCase())
// 	)
// }

export const User = () => {
	const st_text = style.text + ' ' + style.header_text
	const st_icon = 'bx bx-chevron-right' + ' ' + style.toggle
	const st_navtext = style.text + ' ' + style.nav_text

	const [close, setClose] = useState(true)
	const [userData, setUserData] = useState([
		{
			username: `Загрузка данных...`,
		},
	])

	const [searchTerm, setSearchTerm] = useState('')

	const sStyle = {
		color: 'red',
	}
	const eStyle = {}

	const filterUsers = (searchText, listOfUsers) => {
		if (!searchText) {
			updateData()
			return listOfUsers
		}
		return listOfUsers.filter(({ username }) =>
			username.toLowerCase().includes(searchText.toLowerCase())
		)
	}

	const updateData = () => {
		try {
			axios.get('/auth/users').then(data => {
				setUserData([
					{
						username: 'Получаем данные с сервера',
					},
				])
				setUserData(data.data)
			})
		} catch (err) {
			setUserData([
				{
					username: 'Ошибка подгрузки данных',
				},
			])
		}
	}

	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredUsers = filterUsers(searchTerm, userData)
			setUserData(filteredUsers)
		}, 300)

		return () => clearTimeout(Debounce)
	}, [searchTerm])

	const ChecAdm = data => {
		if (data) {
			return 'Администратор'
		} else return 'Пользователь'
	}

	const addStyleS = data => {
		if (data) {
			return sStyle
		} else return eStyle
	}

	// delete User
	const deleteUser = async value => {
		const id = value.target.parentElement.value

		try {
			await axios
				.delete('auth/users', {
					data: {
						id,
					},
				})
				.then(data => {
					toast.success('Операция прошла успешно!')
					updateData()
				})
		} catch (error) {}

		console.log(value)
	}
	// swapRole
	const swapRole = async value => {
		const id = value.target.parentElement.value

		console.log(id)

		try {
			await axios
				.post('auth/addrole', {
					id,
				})
				.then(data => {
					toast.success('Роли были успешно изменены')
					updateData()
				})
		} catch (error) {
			toast.error('произошла внутренняя ошибка')
		}
	}

	let resData = userData.map(data => {
		return (
			<tr key={data._id}>
				<td style={addStyleS(data.isAdmin)}>{data.username}</td>
				<td>{data.email}</td>
				<td>{ChecAdm(data.isAdmin)}</td>
				<td>
					{/* <select name='' id=''>
						<option value='user'>User</option>
						<option value='admin'>Admin</option>
					</select> */}
					<div className={style.settings_block}>
						<button
							value={data._id}
							onClick={swapRole}
							className={style.sButton_s}
						>
							<i value={data._id} class='bx bxs-user-account'></i>
						</button>

						<button
							value={data._id}
							onClick={deleteUser}
							className={style.sButton_t}
						>
							<i value={data._id} class='bx bx-trash'></i>
						</button>
					</div>
				</td>
			</tr>
		)
	})

	return (
		<>
			{/* NavBar */}
			<nav
				className={close ? style.sidebar + ' ' + style.close : style.sidebar}
			>
				<header>
					<div className={style.image_text}>
						<span className={style.image}>
							<img src={hardLogo} alt='HardGroup' />
						</span>
						<div className={st_text}>
							<span className={style.name}>{projectName}</span>
							<span className={style.profession}>Site version: {version}</span>
						</div>
					</div>

					<i onClick={() => setClose(!close)} className={st_icon}></i>
				</header>

				<div className={style.menu_bar}>
					<div className={style.menu}>
						{/* <li className={style.nav_link}>
							<i className='bx bx-home-alt'></i>
							<span className={st_navtext}>Dashboard</span>
						</li> */}
						<ul className={style.menu_links}>
							<li className={style.nav_link}>
								<a href='/admin.dashboard'>
									<i className={'bx bxs-dashboard' + ' ' + style.icon}></i>
									<span className={st_navtext}>Dashboard</span>
								</a>
							</li>

							<li className={style.nav_link}>
								<a href='/admin.users'>
									<i className={'bx bxs-user-detail' + ' ' + style.icon}></i>
									<span className={st_navtext}>Users</span>
								</a>
							</li>
							<li className={style.nav_link}>
								<a href='/admin.crpost'>
									<i className={'bx bxs-plus-square' + ' ' + style.icon}></i>
									<span className={st_navtext}>Create Posts</span>
								</a>
							</li>
							<li className={style.nav_link}>
								<a href='#'>
									<i
										className={'bx bxs-message-square-edit' + ' ' + style.icon}
									></i>
									<span className={st_navtext}>Edit Posts</span>
								</a>
							</li>
							<li className={style.nav_link}>
								<a href='#'>
									<i className={'bx bx-window-close' + ' ' + style.icon}></i>
									<span className={st_navtext}>System</span>
								</a>
							</li>
							<li className={style.nav_link}>
								<a href='#'>
									<i className={'bx bxs-donate-heart' + ' ' + style.icon}></i>
									<span className={st_navtext}>Donate (Beta)</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={style.bottom_content}>
						<li className={style.nav_link}>
							<a href='/'>
								<i className={'bx bx-log-out' + ' ' + style.icon}></i>
								<span className={st_navtext}>Home</span>
							</a>
						</li>
						<div className={st_text}>
							<span className={style.profession}>By Foks_f</span>
						</div>
					</div>
				</div>
			</nav>

			{/* Home */}
			<section className={style.home}>
				<div className={style.topHead}>
					<div className={style.leftHead}>
						<h1>Users</h1>

						<button onClick={updateData}>Load</button>
					</div>
					<div>
						<input
							type='text'
							value={searchTerm}
							autoComplete='off'
							placeholder='Поиск пользователей'
							onChange={e => setSearchTerm(e.target.value)}
						/>
					</div>
				</div>
				<table className={style.table}>
					<thead>
						<tr>
							<th>UserName</th>
							<th>E-Mail</th>
							<th>Role</th>
							<th>Settings</th>
						</tr>
					</thead>
					<tbody>{resData}</tbody>
				</table>
			</section>
		</>
	)
}
