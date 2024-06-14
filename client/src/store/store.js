import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import postSlice from './features/news/newsSlice'

export const store = configureStore({
	reducer: {
		post: postSlice,
		auth: authSlice,
	},
})
