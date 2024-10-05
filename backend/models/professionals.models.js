import mongoose from "mongoose";
const mongoose = require('mongoose');

const professionalSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user_email: {
    type: String
  },
  email_verified: { // field that stores data on weather on not the user is linkedin email verified
    type: Boolean
  },
  profile_picture: {
    type: String //field that keeps trck of the path back to where a users logo/pfp is stored(more storage efficent)
  }, 
  skills: {
    type: [String], // Array of strings representing the professional's skills
    required: true
  },
  location: { // Field storing where the professional is located (in delaware)
    county: { // county the proffessional is located in in delaware 
        type: [String], // array holding the counties in delaware 
        required: true
    },
  },
  // A short description of a professional and their background for the ngo/non profit to read about
  Description: {
    type: String,
    required: true
  },
  interests: { // matches sector field in ngo
    type: [String], // Array of strings representing the professional's interests (were going to use this for the matching)
    required: true
  },
}, {
  timestamps: true // adds createdAt and updatedAt fields (this will be used to store/display/track when accounts were made)
});

// Create and export the model
const Professional = mongoose.model('Professional', professionalSchema);
module.exports = Professional;