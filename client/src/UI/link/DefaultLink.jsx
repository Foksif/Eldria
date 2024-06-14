import React from 'react'
import styles from './DefaultLink.module.css'

// const DefaultButton = ({ children, ...props }) => {
// 	return (
// 		<>
// 			<button {...props} className={styles.myBtn}>
// 				{children}
// 			</button>
// 		</>
// 	)
// }

export const DefaultLink = ({ children, ...props }) => {
	return (
		<>
			<a {...props} className={styles.myBtn}>
				{children}
			</a>
		</>
	)
}

export default DefaultLink
