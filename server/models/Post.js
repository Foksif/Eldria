import mongoose from 'mongoose'

const { Schema, model } = mongoose

const Post = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		picture: { type: String },
	},
	{
		timestamps: true,
	}
)

export default model('Post', Post)
