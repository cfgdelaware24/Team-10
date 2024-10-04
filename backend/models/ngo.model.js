import mongoose from "mongoose";
import Position from "./position.model.js"; // Import the Position model

// Define the NGO schema
const ngoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sector: {
        type: [String],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    openPositions: {
        type: [Position.schema], // Use the Position schema
        required: true,
    },
});

// Export the NGO model
const NGO = mongoose.model("NGO", ngoSchema);
export default NGO;