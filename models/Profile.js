import mongoose from 'mongoose'
const {Schema, model} = mongoose


const ProfileSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "",
          },
        academic_title: {
            type: String,
            required: false,
        }   
    },
    { timestamps: true }
)

const Profile = model("Profile", ProfileSchema)
export default Profile