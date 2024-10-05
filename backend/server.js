import express from "express";
import dotenv from "dotenv";
import path from "path";
import Professional from "./models/professionals.models.js";
import NGO from "./models/ngo.model.js";
import Position from "./models/position.model.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Server is working");
});

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

// Create a new NGO
app.post("/api/ngos", async (req, res) => {
    const ngo = req.body;

    console.log('hi');

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

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});