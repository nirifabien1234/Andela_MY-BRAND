import mongoose from 'mongoose'
const {Schema, model} = mongoose


const ProjectSchema = new Schema(
    {
        
        title: {
            type: String,
            required: true
        },
        projectPic: {
            type: String,
            default: "",
          },
        project_desc: {
        type: String,
        required: true
    },

    },
    { timestamps: true }
)

const Project = model("Project", ProjectSchema)
export default Project