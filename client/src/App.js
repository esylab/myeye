// This component displays a textarea for entering text and a button for initiating the text-to-speech function. It uses the useState hook to manage the state of the text and the axios library to make a POST request to the server with the text to be spoken



import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    axios.post('/api/speak', { text });
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;

