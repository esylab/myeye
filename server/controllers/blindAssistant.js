



const BlindAssistant = require('../models/blindAssistant');
const blindAssistantService = require('../services/blindAssistant');

// Get a description of the surroundings using computer vision
exports.describeSurroundings = async (req, res, next) => {
  try {
    const description = await blindAssistantService.describeSurroundings();
    return res.status(200).json({ description });
  } catch (error) {
    return next(error);
  }
};

// Play audio
exports.playAudio = async (req, res, next) => {
  try {
    await blindAssistantService.playAudio();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

// Pause audio
exports.pauseAudio = async (req, res, next) => {
  try {
    await blindAssistantService.pauseAudio();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

// Play the next track
exports.nextTrack = async (req, res, next) => {
  try {
    await blindAssistantService.nextTrack();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

// Play the previous track
exports.prevTrack = async (req, res, next) => {
  try {
    await blindAssistantService.prevTrack();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

// Increase the volume
exports.increaseVolume = async (req, res, next) => {
  try {
    await blindAssistantService.increaseVolume();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

// Decrease the volume
exports.decreaseVolume = async (req, res, next) => {
  try {
    await blindAssistantService.decreaseVolume();
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

