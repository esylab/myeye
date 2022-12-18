// Imports the required dependencies, including express for the router and the blindAssistantController for handling the API routes.
// Defines the API routes and associates them with the appropriate controller methods.
// Exports the router.
// The controller methods (e.g. describeSurroundings, playAudio, etc.) will handle the requests made to these routes and return the appropriate data or perform the necessary actions.




const blindAssistantService = require('../services/blindAssistant');

exports.describeSurroundings = (req, res, next) => {
  try {
    // Use the service to get an audio description of the surroundings
    const audioDescription = blindAssistantService.getAudioDescription();

    // Return the audio description to the client
    res.send(audioDescription);
  } catch (err) {
    next(err);
  }
};

exports.playAudio = (req, res, next) => {
  try {
    // Use the service to play the audio
    blindAssistantService.playAudio();

    // Return a success message to the client
    res.send({ message: 'Audio playback started' });
  } catch (err) {
    next(err);
  }
};

exports.pauseAudio = (req, res, next) => {
  try {
    // Use the service to pause the audio
    blindAssistantService.pauseAudio();

    // Return a success message to the client
    res.send({ message: 'Audio playback paused' });
  } catch (err) {
    next(err);
  }
};

exports.nextTrack = (req, res, next) => {
  try {
    // Use the service to play the next track
    blindAssistantService.nextTrack();

    // Return a success message to the client
    res.send({ message: 'Playing next track' });
  } catch (err) {
    next(err);
  }
};

exports.prevTrack = (req, res, next) => {
  try {
    // Use the service to play the previous track
    blindAssistantService.prevTrack();

    // Return a success message to the client
    res.send({ message: 'Playing previous track' });
  } catch (err) {
    next(err);
  }
};

exports.increaseVolume = (req, res, next) => {
  try {
    // Use the service to increase the volume
    blindAssistantService.increaseVolume();

    // Return a success message to the client
    res.send({ message: 'Volume increased' });
  } catch (err) {
    next(err);
  }
};

exports.decreaseVolume = (req, res, next) => {
  try {
    // Use the service to decrease the volume
    blindAssistantService.decreaseVolume();

    // Return a success message to the client
    res.send({ message: 'Volume decreased' });
  } catch (err) {
    next(err);
  }
};
