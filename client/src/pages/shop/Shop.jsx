import React from 'react'
import style from './style.module.css'
import { EasyURL, Shop_Key } from '../../configs'
import axios from 'axios'
export const Shop = () => {
	// Axios

	const request = () => {
		try {
			axios
				.get('https://easydonate.ru/api/v3/shop/', {
					headers: {
						'Shop-Key': Shop_Key,
					},
				})
				.then(data => {
					console.log(data)
				})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section class='container'>
			<button onClick={request} className={style.btn}>
				Submit
			</button>

			<h2 class={style.header}>DONATE</h2>
			<p class={style.sub_header}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<div class={style.pricing}>
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
			</div>
		</section>
	)
}
