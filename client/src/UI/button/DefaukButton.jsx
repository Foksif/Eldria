import React from 'react'
import styles from './DefaultButton.module.css'

const DefaultButton = ({ children, ...props }) => {
	return (
		<>
			<button {...props} className={styles.myBtn}>
				{children}
			</button>
		</>
	)
}

// export const DefaultButton = ({ children, ...props }) => { - DEBUG
// 	return (
// 		<>
// 			<a {...props} className={styles.myBtn}>
// 				{children}
// 			</a>
// 		</>
// 	)
// }

export default DefaultButton
