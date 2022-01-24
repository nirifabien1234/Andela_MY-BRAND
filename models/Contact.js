import mongoose from 'mongoose'
const {Schema, model} = mongoose

const ContactSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }   
    },
    { timestamps: true }
)

const Contact = model("Contact", ContactSchema)
export default Contact