import React from 'react'
import style from './style.module.css'

export const Modal = ({ active, setActive, children }) => {
	const notActive = style.modal
	const onActive = style.modal + ' ' + style.active

	const CnotActive = style.modal__content
	const ConActive = style.modal__content + ' ' + style.active

	return (
		<div
			className={active ? onActive : notActive}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? ConActive : CnotActive}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
