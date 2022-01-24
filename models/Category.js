import mongoose from 'mongoose'
const {Schema, model} = mongoose

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = model("Category", CategorySchema)
export default Category