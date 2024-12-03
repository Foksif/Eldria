import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { donate_conf_params } from '../../configs/index.js'
import { T_Shop_Key } from '../../configs/index.js'

import { toast } from 'react-toastify'
import axios from 'axios'

export const Shop = () => {
	const [items, setItems] = useState({})

	useEffect(() => {
		if (donate_conf_params === 0) {
			// TradeMc code

			let url =
				'https://api.trademc.org/shop.getItems?shop=' + T_Shop_Key + '&v=3'

			try {
				axios.get(url).then(resp => {
					// console.log(resp.data.response.categories['0'].items) - DEBUG
					setItems(resp.data.response.categories['0'].items)
				})
			} catch (error) {
				console.log(error)
			}
		} else if (donate_conf_params === 1) {
			// Legacy (Not worked)
			// const getData = async () => {
			// 	const data = await axios.get('/getItems')
			// 	console.log(data)
			// }
			// getData()
		} else if (donate_conf_params === 2) {
			window.location.href = '/?id=0&message=Страница закрыта!'
		}
	}, [])

	console.log(items)

	const addObject = method => {
		if (method === 0) {
			return (
				<>
					<div class={style.card}>
						<div class={style.content}>
							<h4>Basic Plan</h4>
							<h3>0$</h3>
							<p>
								<i class='ri-checkbox-circle-line'></i>
								Smart coding plan
							</p>
							<p>
								<i class='ri-checkbox-circle-line'></i>
								At home workouts
							</p>
						</div>
						<button class={style.btn}>Join Now</button>
					</div>
				</>
			)
		} else if (method === 1) {
			// EDOnATE
		}
	}

	return (
		<section class='container'>
			<h2 class={style.header}>DONATE</h2>
			<p class={style.sub_header}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<div class={style.pricing}>
				{addObject(donate_conf_params)}

				{/* <div class={style.card}>
					<div class={style.content}>
						<h4>Basic Plan</h4>
						<h3>0$</h3>
						<p>
							<i class='ri-checkbox-circle-line'></i>
							Smart coding plan
						</p>
						<p>
							<i class='ri-checkbox-circle-line'></i>
							At home workouts
						</p>
					</div>
					<button class={style.btn}>Join Now</button>
				</div> */}
			</div>
		</section>
	)
}
