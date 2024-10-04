import mongoose from "mongoose";

// Define the Position schema
const positionSchema = mongoose.Schema({
    position: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
});

const Position = mongoose.model("Position", positionSchema);
export default Position;