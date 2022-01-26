import mongoose from 'mongoose'
const {Schema, model} = mongoose


const CommentSchema = new Schema(
    {
        
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
          },
        comment: {
        type: String,
        required: true
    },

    },
    { timestamps: true }
)

const Comment = model("Comment", CommentSchema)
export default Comment