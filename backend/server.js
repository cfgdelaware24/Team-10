import express from "express";
import dotenv from "dotenv";
import Professional from "./models/professionals.models.js";
import NGO from "./models/ngo.model.js";
import Position from "./models/position.model.js";
import Applicant from "./models/applicants.model.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDB();

// Route to test searching for professionals matching a position
app.get("/api/search-professionals/:positionID", async (req, res) => {
    try {
        const { positionID } = req.params;
        const professionals = await search_for_professionals(positionID);
        res.status(200).json(professionals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to test searching for positions matching a professional
app.get("/api/search-positions/:professionalID", async (req, res) => {
    try {
        const { professionalID } = req.params;
        const positions = await search_for_positions(professionalID);
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("Server is working");
});

// GET FUNCTIONS 

// Get all professionals
app.get("/api/professionals", async (req, res) => {
    try {
        const professionals = await Professional.find({});
        res.status(200).json(professionals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all NGOs
app.get("/api/ngos", async (req, res) => {
    try {
        const ngos = await NGO.find({});
        res.status(200).json(ngos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all positions
app.get("/api/positions", async (req, res) => {
    try {
        const positions = await Position.find({});
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all applicants
app.get("/api/applicants", async (req, res) => {
    try {
        const applicants = await Applicant.find({});
        res.status(200).json(applicants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// POST FUNCTIONS (CREATE)

app.post("/api/professionals", async (req, res) => {
    const professional = req.body;

    // checks if all the fields are filled 
    if (!professional.name || !professional.linkedin || !professional.skills || !professional.sector || !professional.location) {
        return res.status(400).json({ message: "Please fill all fields" });
    } 

    const newProfessional = new Professional(professional);

    try {
        await newProfessional.save();
        res.status(201).json(newProfessional);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

});

// Create a new NGO
app.post("/api/ngos", async (req, res) => {
    const ngo = req.body;

    if (!ngo.name || !ngo.sector || !ngo.county || !ngo.location || !ngo.mission) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const newNGO = new NGO(ngo);

    try {
        await newNGO.save();
        res.status(201).json(newNGO);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message });
        // res.status(409).json({ message: error.message });
    }
});

// Create a new position
app.post("/api/positions", async (req, res) => {
    const position = req.body;

    if (!position.position || !position.jobDescription || !position.skills ||!position.ngoID) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const newPosition = new Position(position);

    try {
        await newPosition.save();
        res.status(201).json(newPosition);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// Create a new applicant 
app.post("/api/applicants", async (req, res) => {
    const applicant = req.body;

    if (!applicant.matchedApps || !applicant.positionID) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const newApplicant = new Applicant(applicant);

    try {
        await newApplicant.save();
        res.status(201).json(newApplicant);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

// PUT FUNCTION

// modify the array of applicants 
app.put('/api/applicants/:positionID', async (req, res) => {
    const { positionID } = req.params; 
    const { userID } = req.body; 

    try {
        // Find the applicant by positionID and add the new userID to the matchedApps array
        const updatedApplicant = await Applicant.findOneAndUpdate(
            { positionID },
            { $addToSet: { matchedApps: userID } }, 
            { new: true, useFindAndModify: false } 
        );

        if (!updatedApplicant) {
            return res.status(404).json({ message: 'Applicant not found' });
        }

        return res.status(200).json(updatedApplicant);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating applicant', error });
    }
});


app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});