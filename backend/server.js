import express from "express";
import dotenv from "dotenv";
import path from "path";
import Professional from "./models/professionals.models.js";

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

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});