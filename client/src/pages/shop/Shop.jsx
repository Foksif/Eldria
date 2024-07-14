import React from 'react'
import style from './style.module.css'
import { donate_conf_params } from '../../configs/index.js'
import { toast } from 'react-toastify'
import axios from 'axios'

export const Shop = () => {
	if (donate_conf_params === 0) {
		// TradeMc code
	} else if (donate_conf_params === 1) {
		// EasyDonate code
	} else if (donate_conf_params === 2) {
		window.location.href = '/?id=0&message=Страница закрыта!'
	}

	return (
		<section class='container'>
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
