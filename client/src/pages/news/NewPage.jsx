import React, { useCallback, useEffect, useState } from 'react'
import axios from '../../utils/axios'
import Moment from 'react-moment'
import { useParams } from 'react-router-dom'
import style from './style.module.css'

const NewPage = () => {
	const [post, setPost] = useState([])

	const params = useParams()

	const fetchPost = useCallback(async () => {
		try {
			const { data } = await axios.get(`/posts/post/${params.id}`)
			setPost(data)
		} catch (error) {
			console.log(error)
		}
	}, [params.id])

	useEffect(() => {
		fetchPost()
	}, [fetchPost])

	return (
		<div className={style.container}>
			<div className={style.post}>
				<div className={style.post_image}>
					<img src={`http://localhost:8090/static/${post.picture}`} />
				</div>
				<div className={style.post_content}>
					<div className={style.post_header}>
						<h1>{post.title}</h1>
						<div className={style.post_meta}>
							<span className={style.author}>Новости</span>
							<span className={style.category}>
								<Moment date={post.createdAt} format='DD.MM.YYYY HH:MM' />
							</span>
						</div>
					</div>
					<p>{post.content}</p>
				</div>
			</div>
		</div>
	)
}

export { NewPage }
