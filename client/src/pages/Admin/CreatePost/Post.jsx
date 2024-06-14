import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { createPost } from '../../../store/features/news/newsSlice'

import { version, projectName } from '../../../configs'

import style from './style.module.css'
import hardLogo from '../../../image/hardLogo.png'

export const Post = () => {
	// Переделывал блятских 3 раза, мне не передать всю ту боль которую
	// я прочувствовал во время работы над этим проектом в каждую написанную строчку я вложил
	// свои страдания поэтому сочувствую тем кто будет смотреть мой код ;)
	// На этот блок было потраченно 6 часов с учётом переписи кривого на тот мометн бека))

	// File form...
	const inputRef = useRef()

	const [selectedFile, setSelectedFile] = useState(null)

	// Handle the change event when a file is selected
	const handleOnChange = event => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0])
			setImage(event.target.files[0])
		}
	}

	const onChooseFile = () => {
		inputRef.current.click()
	}

	const removeFile = () => {
		setSelectedFile(null)
		setImage('')
	}

	// Styles...

	const st_text = style.text + ' ' + style.header_text
	const st_icon = 'bx bx-chevron-right' + ' ' + style.toggle
	const st_navtext = style.text + ' ' + style.nav_text

	const h2 = style.h2
	const inpotbox = style.inputbox

	const [close, setClose] = useState(true)

	// Create POST...

	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [image, setImage] = useState('')

	const dispatch = useDispatch()

	const submitHandler = () => {
		try {
			const data = new FormData()
			data.append('title', title)
			data.append('content', text)
			data.append('picture', image)

			dispatch(createPost(data))
			toast.success('Пост создан!')
		} catch (err) {
			console.log(err)
			toast.error('Ошибка создании поста: подробнее в консоли!')
		}
	}

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
				<form onSubmit={e => e.preventDefault()}>
					<div className={style.form_box}>
						<h2>Форма создания поста!</h2>
						<div className={style.imageUpload_block}>
							<div>
								<input
									type='file'
									ref={inputRef}
									onChange={handleOnChange}
									style={{ display: 'none' }}
								/>

								<button className={style.file_btn} onClick={onChooseFile}>
									<i class='bx bx-upload'></i> Upload image
								</button>

								{selectedFile && (
									<div className={style.select_file}>
										<p>{selectedFile.name}</p>

										<button onClick={removeFile}>
											<i class='bx bx-trash'></i>
										</button>
									</div>
								)}
							</div>
						</div>
						<div className={style.input_box}>
							<label htmlFor=''>Title</label>
							<input
								value={title}
								onChange={e => setTitle(e.target.value)}
								type='text'
								placeholder='Введите название вашего поста.'
							/>
						</div>
						<div className={style.input_box}>
							<label htmlFor=''>Content</label>
							<textarea
								value={text}
								onChange={e => setText(e.target.value)}
								placeholder='Контент вашего поста.'
							></textarea>
						</div>
						<div className={style.button_box}>
							<button onClick={submitHandler}>Отправить</button>
						</div>
					</div>
				</form>
			</section>
		</>
	)
}
