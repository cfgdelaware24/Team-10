import mongoose from "mongoose";

// Define the applicants schema for applicants who pass the matching process
const applicantsSchema = mongoose.Schema({
    matchedApps: {
        type: [String], // userIDs that matched to a specific position
        required: true,
    },
    positionID: {
        type: String,
        required: true,
    }
});

// Export the applicants model
const Applicant = mongoose.model("Applicants", applicantsSchema);
export default Applicant;