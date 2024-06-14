import mongoose from 'mongoose'

const { Schema, model } = mongoose

const Forum = new Schema(
	{
		title: { type: String, required: true },
		text: { type: String, required: true },
		tags: { type: Array, default: [] },
		viewsCount: { type: Number, default: 0 },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		imageUrl: { type: String },
		comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	},
	{ timestamps: true }
)

export default model('Forum', Forum)
