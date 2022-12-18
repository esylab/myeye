// Imports the mongoose module for interacting with the MongoDB database.
// Defines a Mongoose schema for the BlindAssistant model, with fields for the audio description, current track, and volume.
// Creates a Mongoose model using the mongoose.model() method, passing in the name of the model ('BlindAssistant') and the schema.
// Exports the model.




const mongoose = require('mongoose');

const blindAssistantSchema = new mongoose.Schema({
  audioDescription: String,
  currentTrack: String,
  volume: Number,
});

const BlindAssistant = mongoose.model('BlindAssistant', blindAssistantSchema);

module.exports = BlindAssistant;

