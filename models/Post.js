import mongoose from 'mongoose'
const {Schema, model} = mongoose


const PostSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      author: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        required: false,
      },
    },
    { timestamps: true }
  );
  
const Post = model('Post', PostSchema )
export default Post