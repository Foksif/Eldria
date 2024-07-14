import HomeCSS from './Home.module.css'
import DefaultLink from '../../UI/link/DefaultLink'
import DiscordImg from '../../image/discord.svg'
import arrowImg from '../../image/arrow.svg'

import { projectName } from '../../configs'
import { toast } from 'react-toastify'

const HomePage = () => {
	const searchParamsId = new URLSearchParams(window.location.search)
	const paramid = searchParamsId.get('id')

	const searchParams = new URLSearchParams(window.location.search)
	const messageValue = searchParams.get('message')

	if (paramid == 0) {
		toast.warning(messageValue)
	} else if (paramid == 1) {
		toast.success(messageValue)
	} else if (paramid == 2) {
		toast.error(messageValue)
	} else {
		toast.error('Произошла непредвиденная ошибка')
	}

	// Styles constants
	const discordSt = HomeCSS.min_wighet + ' ' + HomeCSS.discord
	const telegramSt = HomeCSS.min_wighet + ' ' + HomeCSS.telegram
	const vkSt = HomeCSS.min_wighet + ' ' + HomeCSS.vk
	const ytSt = HomeCSS.min_wighet + ' ' + HomeCSS.yt

	return (
		<>
			<section id='home' className={HomeCSS.home}>
				<div className='container'>
					<div className={HomeCSS.home__block}>
						<h1 className={HomeCSS.home__title}>{projectName}</h1>
						<h2 className={HomeCSS.home__sub_title}>
							The Minecraft <span className={HomeCSS.home__bac}>MMORPG</span>
						</h2>
						<div className={HomeCSS.home__separ}>
							<div className={HomeCSS.separ__line_left}></div>
							<div className={HomeCSS.separ__circle}></div>
							<div className={HomeCSS.separ__line}></div>
						</div>
						<div className={HomeCSS.home__sub_content}>
							<h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Suscipit, adipisci.
								{/* <box-icon color='#dec804' name='rocket'></box-icon> */}
							</h3>
						</div>
						<div className={HomeCSS.home__sub_button}>
							<DefaultLink href='#section-two'>SUBSCRIBE TO US ON</DefaultLink>
						</div>
					</div>
				</div>
			</section>
			<section className={HomeCSS.section_two} id='section-two'>
				<div className='container'>
					<div className={HomeCSS.wighet__title}>
						<h1>Социальные сети и сообщества</h1>
					</div>
					<div className={HomeCSS.wighet}>
						<a className={vkSt} href=''>
							<img className={HomeCSS.min_wighet_img} src={DiscordImg} alt='' />
							<p>Группа в VK</p>
							<img className={HomeCSS.min_wighet_arrow} src={arrowImg} alt='' />
						</a>
						<a className={telegramSt} href=''>
							<img className={HomeCSS.min_wighet_img} src={DiscordImg} alt='' />
							<p>Группа в Telegram</p>
							<img className={HomeCSS.min_wighet_arrow} src={arrowImg} alt='' />
						</a>
						<a className={discordSt} href=''>
							<img className={HomeCSS.min_wighet_img} src={DiscordImg} alt='' />
							<p>Сервер Discord</p>
							<img className={HomeCSS.min_wighet_arrow} src={arrowImg} alt='' />
						</a>
						<a className={ytSt} href=''>
							<img className={HomeCSS.min_wighet_img} src={DiscordImg} alt='' />
							<p>Канал на YouTube</p>
							<img className={HomeCSS.min_wighet_arrow} src={arrowImg} alt='' />
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export { HomePage }
