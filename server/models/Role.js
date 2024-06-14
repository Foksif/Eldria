import mongoose from 'mongoose'

const { Schema, model } = mongoose

const Role = new Schema({
	value: { type: Boolean, unique: false, default: false },
})

export default model('Role', Role)
