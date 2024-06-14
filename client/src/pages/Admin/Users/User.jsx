import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import hardLogo from '../../../image/hardLogo.png'
import axios from '../../../utils/axios'
import { version, projectName } from '../../../configs'

// До исторические обрывки цевилизации)

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
	// О вы ещё здесь!)
	// Это продолжение моего сочинения "На сколько меня заебал этот сайт"
	// Вот сижу на часах 5 утра мне на учёбу в восемь и думаю
	// хули я так много трачу времени на этот сайт но не будем обо мне
	// Этот блок я переписывал рекордных 5 раз! Вы возможно зададитесь вопросом почему так много?
	// А я вам отвечу из за моей тупости :( Сначало всё шло хорошо обрисовал какой никакой но дизайн
	// сверстал его, смотрю и понимаю что не то что я хотел полез в инет а дизайна прикольных таблиц нету
	// и спустя блятских 30 МИНУТ я нашёл его и поне что да это оно! сверстал начал подключать к беку,
	// спросите что было дальше? ну тогда слушайте, подключил я эту херабору начал тестить а оно не работает
	// я задался вопросом какого хуя? Но подумал похуй разберусь но не тут то было (поясню ошибка была в преобразовании из JSON
	// в понятный для реакта) провозилса часа 2 и думаю а что если я в дефолтный стейт буду передовать стартовый JSON обьект и блять
	// эта хуйня придуманная за 5 сек сработала я был подавлен потомучто какойто ебаный JavaScript попустил и выебал мой и без того
	// уставший труп я конечно не расстерялся и подумал а хули поиск блять не добавить ну типо а почему бы и нет это конечно
	// было легче но всёже пришлось переписать часть с получсением данных с серера до этого запрос находился в useEffect
	// но из за того что при каждом обновлении DOM-дерево заново отправлялся запрос на сервер пришлось сделать отдельную функцию
	// для получения данных с сервера и о чудо с костылями но это заработало!
	// Крч потратил часв 7 наверно уже точно не помню но из этих часов 7 я наверно часа 2 исках инфу в инете!

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
		if (data == 'root') {
			return sStyle
		} else return eStyle
	}

	let resData = userData.map(data => {
		return (
			<tr key={data._id}>
				<td style={addStyleS(data.username)}>{data.username}</td>
				<td>{data.email}</td>
				<td>{ChecAdm(data.isAdmin)}</td>
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
						</tr>
					</thead>
					<tbody>{resData}</tbody>
				</table>
			</section>
		</>
	)
}
