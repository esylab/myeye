// Imports the BlindAssistant model for interacting with the database.
// Defines the service methods for performing the necessary actions or retrieving the necessary data. These methods use the model to perform data operations such as retrieving or updating documents in the database.
// The playAudio, pauseAudio, nextTrack, prevTrack, increaseVolume, and decreaseVolume methods do not return any data, but simply update the database as necessary. The getAudioDescription method retrieves the audio description from the database and returns it.




const BlindAssistant = require('../models/blindAssistant');

exports.getAudioDescription = () => {
  // Retrieve the audio description from the database
  const audioDescription = BlindAssistant.findOne().audioDescription;

  return audioDescription;
};

exports.playAudio = () => {
  // Update the database to indicate that the audio is playing
  BlindAssistant.findOneAndUpdate({}, { isPlaying: true });
};

exports.pauseAudio = () => {
  // Update the database to indicate that the audio is paused
  BlindAssistant.findOneAndUpdate({}, { isPlaying: false });
};

exports.nextTrack = () => {
  // Retrieve the current track from the database
  const currentTrack = BlindAssistant.findOne().currentTrack;

  // Get the index of the current track in the playlist
  const currentTrackIndex = playlist.indexOf(currentTrack);

  // Get the next track in the playlist
  const nextTrack = playlist[currentTrackIndex + 1];

  // Update the database with the new track
  BlindAssistant.findOneAndUpdate({}, { currentTrack: nextTrack });
};

exports.prevTrack = () => {
  // Retrieve the current track from the database
  const currentTrack = BlindAssistant.findOne().currentTrack;

  // Get the index of the current track in the playlist
  const currentTrackIndex = playlist.indexOf(currentTrack);

  // Get the previous track in the playlist
  const prevTrack = playlist[currentTrackIndex - 1];

  // Update the database with the new track
  BlindAssistant.findOneAndUpdate({}, { currentTrack: prevTrack });
};

exports.increaseVolume = () => {
  // Retrieve the current volume from the database
  const currentVolume = BlindAssistant.findOne().volume;

  // Increase the volume by 10%
  const increasedVolume = currentVolume * 1.1;

  // Update the database with the new volume
  BlindAssistant.findOneAndUpdate({}, { volume: increasedVolume });
};

exports.decreaseVolume = () => {
  // Retrieve the current volume from the database
  const currentVolume = BlindAssistant.findOne().volume;

  // Decrease the volume by 10%
  const decreasedVolume = currentVolume * 0.9;

  // Update the database with the new volume
  BlindAssistant.findOneAndUpdate({}, { volume: decreasedVolume });
};

