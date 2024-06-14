import React, { useEffect } from 'react'
import style from './style.module.css'
import { PostItem } from '../../components/PostItem/PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../store/features/news/newsSlice'

const NewsPage = () => {
	const dispatch = useDispatch()
	const { posts } = useSelector(state => state.post)

	useEffect(() => {
		dispatch(getAllPosts())
	}, [dispatch])

	if (!posts.length) {
		return (
			<div>
				<h1>Постов не найденно!</h1>
			</div>
		)
	}

	return (
		<section>
			<div className='container'>
				<div className={style.wrap}>
					<div className={style.wrapper}>
						{posts?.map((post, idx) => (
							<PostItem key={idx} post={post} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export { NewsPage }
