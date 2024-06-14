import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
	posts: [],
	loading: false,
}

export const createPost = createAsyncThunk('post/createPost', async params => {
	try {
		const { data } = await axios.post('/posts/post', params)
		return data
	} catch (err) {
		console.log(err)
	}
})

export const getAllPosts = createAsyncThunk('/post/getAllPosts', async () => {
	try {
		const { data } = await axios.get('/posts/post')
		return data
	} catch (error) {
		console.log(error)
	}
})

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// Create post

		builder
			.addCase(createPost.pending, state => {
				state.loading = true
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.loading = false
				state.posts.push(action.payload)
			})
			.addCase(createPost.rejected, (state, action) => {
				state.loading = false
			})
			// GetAllPosts
			.addCase(getAllPosts.pending, state => {
				state.loading = true
			})
			.addCase(getAllPosts.fulfilled, (state, action) => {
				state.loading = false
				state.posts = action.payload
			})
			.addCase(getAllPosts.rejected, (state, action) => {
				state.loading = false
			})
	},
})

export default postSlice.reducer
