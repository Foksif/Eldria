import React from 'react'
import { SideBar } from './SideBar/SideBar'

export const AdminLayout = ({ children }) => {
	return (
		<React.Fragment>
			<SideBar />
			{children}
		</React.Fragment>
	)
}
