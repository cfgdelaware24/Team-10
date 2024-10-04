import mongoose from "mongoose";
const mongoose = require('mongoose');

const professionalSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  skills: {
    type: [String], // Array of strings representing the professional's skills
    required: true
  },
  location: { // Field storing where the professional is located 
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  // A short description of a proffessional and their background for the ngo/non profit to read about
  Description: {
    type: String,
    required: true
  },
  interests: {
    type: [String], // Array of strings representing the professional's interests (were going to use this for the matching)
    required: true
  },
}, {
  timestamps: true // adds createdAt and updatedAt fields (this will be used to store/display/track when accounts were made)
});

// Create and export the model
const Professional = mongoose.model('Professional', professionalSchema);
module.exports = Professional;