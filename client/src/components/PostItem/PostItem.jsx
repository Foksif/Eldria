import React from 'react'
import style from './style.module.css'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const PostItem = ({ post }) => {
	if (!post) {
		return (
			<div>
				<h1>Постов не найденно!</h1>
			</div>
		)
	}

	return (
		<Link to={`/news/${post._id}`}>
			<div className={style.block}>
				<div className={style.block_img}>
					{post.picture ? (
						<img src={`http://localhost:8090/static/${post.picture}`} alt='' />
					) : (
						''
					)}
				</div>
				<div className={style.block_wrap}>
					<div className={style.block_title}>
						<h1>{post.title}</h1>
					</div>
					<div className={style.block_content}>
						<p>{post.content}</p>
					</div>

					<div className={style.date}>
						<p>
							<Moment date={post.createdAt} format='DD.MM.YYYY HH:MM' />
						</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
