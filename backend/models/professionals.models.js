import mongoose, { mongo } from "mongoose";

const professionalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    }, 
    skills: {
        type: [String],
        required: true,
    },
    sector: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
        required: true,
    }

});

const Professional = mongoose.model("Professional", professionalSchema);
export default Professional;