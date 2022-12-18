// Imports the required dependencies, including express for the router and the blindAssistantController for handling the API routes.
// Defines the API routes and associates them with the appropriate controller methods.
// Exports the router.


// The controller methods (e.g. describeSurroundings, playAudio, etc.) will handle the requests made to these routes and return the appropriate data or perform the necessary actions.




const express = require('express');
const router = express.Router();
const blindAssistantController = require('../controllers/blindAssistant');

// Set up the routes for the API
router.get('/describe-surroundings', blindAssistantController.describeSurroundings);
router.post('/play-audio', blindAssistantController.playAudio);
router.post('/pause-audio', blindAssistantController.pauseAudio);
router.post('/next-track', blindAssistantController.nextTrack);
router.post('/prev-track', blindAssistantController.prevTrack);
router.post('/increase-volume', blindAssistantController.increaseVolume);
router.post('/decrease-volume', blindAssistantController.decreaseVolume);

module.exports = router;


router.post('/speak', (req, res) => {
  const text = req.body.text;

  // Implement the text-to-speech function here, using a text-to-speech engine or API

  res.send({ message: 'Text spoken successfully' });
});

