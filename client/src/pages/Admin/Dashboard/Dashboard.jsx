import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { version, GameIP, GamePORT, projectName } from '../../../configs'
import axios from '../../../utils/axios'
import mineToolsAPI from '../../../utils/mineToolsAPI'

import style from './style.module.css'
import hardLogo from '../../../image/hardLogo.png'
import plus from '../../../image/plus.png'

export const Dashboard = () => {
	const st_text = style.text + ' ' + style.header_text
	const st_icon = 'bx bx-chevron-right' + ' ' + style.toggle
	const st_navtext = style.text + ' ' + style.nav_text

	const [close, setClose] = useState(true)
	const [userData, setUserData] = useState([])

	const [lastUser, setLastUser] = useState([])
	const [plastUser, setPLastUser] = useState([])
	const [flastUser, setFLastUser] = useState([])

	const [gameServerOnline, setGameServerOnline] = useState(0)

	const [postsCount, setPostsCount] = useState(0)

	useEffect(() => {
		try {
			axios.get('/auth/users').then(data => {
				setUserData(data.data)
				setLastUser(data.data.at(-1))

				setPLastUser(data.data.at(-2) || data.data.at(-1))

				setFLastUser(data.data.at(-3) || data.data.at(-1))
			})
		} catch (err) {
			setUserData([
				{
					username: 'Ошибка подгрузки данных',
				},
			])
		}

		// GetPostCount

		try {
			axios.get('/posts/post').then(data => {
				const posts = data.data
				setPostsCount(posts.length)
			})
		} catch (err) {}
		try {
			mineToolsAPI.get('ping/' + GameIP + '/' + GamePORT).then(data => {
				console.log(data)
				try {
					if (!data.data.players) {
						setGameServerOnline('ERROR')
					}
					setGameServerOnline(data.data.players.online)
				} catch (err) {
					toast.error(data.data.error)
				}
			})
		} catch (err) {
			console.log(err)
		}
	}, [])

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
				<main>
					<div class={style.header}>
						<div class={style.left}>
							<h1>Dashboard</h1>
							<ul class={style.breadcrumb}>
								<li>Analytics</li>
							</ul>
						</div>
					</div>

					<ul className={style.insights}>
						<li>
							<i className={'bx bx-user-plus' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>{userData.length}</h3>
								<p>Total Users</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-server' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>{gameServerOnline}</h3>
								<p>Game online</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-news' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>{postsCount}</h3>
								<p>News</p>
							</span>
						</li>
						<li>
							<i className={'bx bx-dollar-circle' + ' ' + style.bx}></i>
							<span className={style.info}>
								<h3>674</h3>
								<p>Total Sales</p>
							</span>
						</li>
					</ul>

					<div className={style.new_users}>
						<h2 className={style.new__users_title}>NewUsers</h2>
						<div className={style.user_list}>
							<div className={style.user}>
								<img
									src={
										'https://visage.surgeplay.com/face/100/' + lastUser.username
									}
									alt='UserAvatar'
								/>
								<h2>{lastUser.username}</h2>
							</div>
							<div className={style.user}>
								<img
									src={
										'https://visage.surgeplay.com/face/100/' +
										plastUser.username
									}
									alt='UserAvatar'
								/>
								<h2>{plastUser.username}</h2>
							</div>
							<div className={style.user}>
								<img
									src={
										'https://visage.surgeplay.com/face/100/' +
										flastUser.username
									}
									alt='UserAvatar'
								/>
								<h2>{flastUser.username}</h2>
							</div>
							<div className={style.user}>
								<a href='/admin.users'>
									<img src={plus} alt='' />
								</a>

								<h2>All users</h2>
							</div>
						</div>
					</div>
				</main>
			</section>
		</>
	)
}

// Дорогие друзья этот блок я переписывал 2 раза он впринцепи простой но проблема была
// в другом я ебучий час листал интернет чтобы найти блятское апи для вывода
// блятских аватарок все те сайты которые я знал уже давно не работают или
// себались из РФ. Поэтому я надеюсь вы прочувствуете всю боль когда будите смотреть код дальше)
// И да если вы сначала смотрите фронт то можете подготовить себя морально ибо бек намного запутанней))))))

// Потраченно времени 4 часа
// Мой совет не беритесь за работу фронта если вам не дают дизайн всех страниц...
// Из головы придумывать что-то это пиздец ебаный
