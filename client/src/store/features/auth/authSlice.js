import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
	token: null,
	isLoading: false,
	status: null,
	succes: true,
	username: null,
	isAdmin: null,
	_id: null,
	email: null,
}

export const registerUser = createAsyncThunk(
	'auth/register',
	async authData => {
		try {
			const { email, username, password } = authData

			console.log('axios loaded')
			console.log(email, username, password)
			const { data } = await axios.post('/auth/register', {
				email,
				username,
				password,
			})
			console.log('axios submitted')

			if (data.token) {
				window.localStorage.setItem('token', data.token)
			}

			return data
		} catch (e) {
			console.log(e)
		}
	}
)

export const loginUser = createAsyncThunk('auth/login', async authData => {
	try {
		const { username, password } = authData

		// console.log('axios loaded') - DEBUG
		console.log(username, password)
		const { data } = await axios.post('/auth/login', {
			username,
			password,
		})
		if (data.token) {
			window.localStorage.setItem('token', data.token)
		}
		return data
	} catch (e) {
		console.log(e)
	}
})

export const getMe = createAsyncThunk('auth/getme', async authData => {
	try {
		const { data } = await axios.get('/auth/getme')

		return data
	} catch (e) {
		console.log(e)
	}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.token = null
			state.isLoading = false
			state.status = null
			state.succes = false
			state.username = null
			state.isAdmin = null
			state._id = null
			state.email = null
		},
	},
	extraReducers: builder => {
		// Register
		builder
			.addCase(registerUser.pending, state => {
				state.isLoading = true
				state.status = null
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.status = action.payload.message
				state.token = action.payload.token
				state.succes = action.payload.succes
			})

			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false
				state.status = action.payload.message
			})
		// Login
		builder
			.addCase(loginUser.pending, state => {
				state.isLoading = true
				state.status = null
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.status = action.payload.message
				state.token = action.payload.token
				state.succes = action.payload.succes
			})

			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false
				state.status = action.payload.message
			})
		// GetMe
		builder
			.addCase(getMe.pending, state => {
				state.isLoading = true
				state.status = null
			})
			.addCase(getMe.fulfilled, (state, action) => {
				state.isLoading = false
				state.status = null
				state.username = action.payload?.username
				state.email = action.payload?.email
				state.isAdmin = action.payload?.isAdmin
				state.succes = action.payload?.succes
				state._id = action.payload?._id
			})

			.addCase(getMe.rejected, (state, action) => {
				state.isLoading = false
				state.status = action.payload.message
			})
	},
})

export const checkIsAuth = state => Boolean(state.auth._id)

export const { logout } = authSlice.actions
export default authSlice.reducer
