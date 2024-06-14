import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// Pages
import { NewsPage } from './pages/news/newsPage'
import { NewPage } from './pages/news/NewPage'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Admin/Dashboard/Dashboard'
import { Post } from './pages/Admin/CreatePost/Post'
import { User } from './pages/Admin/Users/User'
import { Shop } from './pages/shop/Shop'
// import { AdminLayout } from './components/AdminLayout'
import { HomePage } from './pages/Home/Home'
import { Login } from './pages/Auth/Login'
import { Profile } from './pages/profile/Profile'
import { Register } from './pages/Auth/Register'

// Logic
import { getMe } from './store/features/auth/authSlice'
import { checkIsAuth, logout } from './store/features/auth/authSlice'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(checkIsAuth)
	const isAdmin = useSelector(state => state.auth.isAdmin)

	const segment = window.location.pathname.split('/')[1]
	const notAuth = ['profile']
	const auth = ['login', 'register']

	// Для перенаправления (редиректа) пользователей
	const chechIsPage = page => {
		if (segment === page) {
			if (notAuth.includes(page)) {
				window.location.href = '/login'
			} else if (auth.includes(page)) {
				window.location.href = '/'
			}
		}
	}

	useEffect(() => {
		dispatch(getMe())
	}, [])

	return (
		<>
			<Layout>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<HomePage />
							</>
						}
					/>
					<Route
						path='/news'
						element={
							<>
								<NewsPage />
							</>
						}
					/>
					<Route
						path='/store'
						element={
							<>
								<Shop />
							</>
						}
					/>
					<Route
						path='/news/:id'
						element={
							<>
								<NewPage />
							</>
						}
					/>

					{isAuth ? (
						<>
							<Route
								path='profile'
								element={
									<>
										<Profile />
									</>
								}
							/>
							{chechIsPage('login')}
							{chechIsPage('register')}
						</>
					) : (
						<>
							{chechIsPage('profile')}
							<Route
								path='login'
								element={
									<>
										<Login />
									</>
								}
							/>
							<Route
								path='register'
								element={
									<>
										<Register />
									</>
								}
							/>
						</>
					)}

					<Route path='admin.users' element={<User />} />
					<Route path='admin.dashboard' element={<Dashboard />} />
					<Route path='admin.crpost' element={<Post />} />
				</Routes>

				<ToastContainer
					position='top-right'
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
			</Layout>
		</>
	)
}

export default App
