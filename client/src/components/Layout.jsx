import React from 'react'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'

export const Layout = ({ children }) => {
	const segment = window.location.pathname.split('/')[1]
	const data = [
		'admin.users',
		'admin.dashboard',
		'admin.system',
		'admin.crpost',
	]
	const chec = segment => {
		if (data.includes(segment)) {
			return true
		} else return false
	}

	const hasChech = chec(segment)
	console.log(hasChech)
	console.log(segment)

	return (
		<React.Fragment>
			{hasChech ? <></> : <Header />}
			{children}
		</React.Fragment>
	)
}
