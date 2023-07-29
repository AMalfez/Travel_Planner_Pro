const mongoose = require('mongoose');

// Define the sub-schema for saved itineraries
const itinerarySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  placesToVisit: [{
    type: String
  }],
  startingDestination: {
    type: String
  },
  endingDestination: {
    type: String
  },
  startingDate: {
    type: Date
  },
  endingDate: {
    type: Date
  }
});

// Define the main user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  savedItineraries: [itinerarySchema]
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
