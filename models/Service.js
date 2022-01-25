const {Schema, model} = mongoose


const ServiceSchema = new Schema(
    {
        
        title: {
            type: String,
            required: true
        },
        servicePic: {
            type: String,
            default: "",
          },
        service_desc: {
        type: String,
        required: true
    },

    },
    { timestamps: true }
)

const Service = model("Service", ServiceSchema)
export default Service