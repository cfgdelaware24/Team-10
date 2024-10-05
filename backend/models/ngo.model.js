import mongoose from "mongoose";

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
    county: {
        type: [String],
        required: true,
    },
    location: {
        type: [String],
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
});

// Export the NGO model
const NGO = mongoose.model("NGO", ngoSchema);
export default NGO;