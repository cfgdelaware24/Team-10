import { searchForPositions, searchForProfessionals} from "../services/SkillsMatcher.js";
// import { searchForProfessionals, searchForPositions } from "../services/SkillsMatcher.js";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "../config/db.js";
import axios from "axios";

async function testSearchForPositions() {
    try {
        console.log("hi");
        const results = await searchForPositions("67009c5c6f5ff726361f4cc5");
        
        console.log(results);
    } catch (error) {
        console.error("Error fetching positions:", error);
    }
}

async function testSearchForProfessionals() {
    try {
        console.log("hi");
        const results = await searchForProfessionals("67009c5c6f5ff726361f4cc5");
        
        console.log(results);
    } catch (error) {
        console.error("Error fetching positions:", error);
    }
}



testSearchForPositions();