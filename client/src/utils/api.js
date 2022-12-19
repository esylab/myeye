// exports a set of functions that make API requests to the server using the axios library. Each function makes a request to a specific API route, with the appropriate HTTP method (e.g. GET, POST, etc.). These functions can be imported and used in other components as needed to interact with the server.



import axios from 'axios';

export const describeSurroundings = () => {
  return axios.get('/api/describe-surroundings');
};

export const playAudio = () => {
  return axios.post('/api/play-audio');
};

export const pauseAudio = () => {
  return axios.post('/api/pause-audio');
};

export const nextTrack = () => {
  return axios.post('/api/next-track');
};

export const prevTrack = () => {
  return axios.post('/api/prev-track');
};

export const increaseVolume = () => {
  return axios.post('/api/increase-volume');
};

export const decreaseVolume = () => {
  return axios.post('/api/decrease-volume');
};
