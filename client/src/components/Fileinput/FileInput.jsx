import React, { useRef, useState } from 'react'
import style from './style.module.css'

const FileInput = () => {
	const inputRef = useRef()

	const [selectedFile, setSelectedFile] = useState(null)

	// Handle the change event when a file is selected
	const handleOnChange = event => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0])
		}
	}

	const onChooseFile = () => {
		inputRef.current.click()
	}

	const removeFile = () => {
		setSelectedFile(null)
	}

	return (
		<div>
			<input
				type='file'
				ref={inputRef}
				onChange={handleOnChange}
				style={{ display: 'none' }}
			/>

			<button className={style.file_btn} onClick={onChooseFile}>
				<i class='bx bx-upload'></i> Upload image
			</button>

			{selectedFile && (
				<div className={style.select_file}>
					<p>{selectedFile.name}</p>

					<button onClick={removeFile}>
						<i class='bx bx-trash'></i>
					</button>
				</div>
			)}
		</div>
	)
}

export default FileInput
