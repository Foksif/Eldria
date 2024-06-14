import mongoose from 'mongoose'

const { Schema, model } = mongoose

const User = new Schema({
	username: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
})

export default model('User', User)
