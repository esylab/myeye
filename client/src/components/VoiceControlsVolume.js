import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VoiceCommands = () => {
  const [command, setCommand] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      setCommand(event.results[0][0].transcript);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const handleListen = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleSend = () => {
    axios.post('/api/command', { command });
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  return (
    <div>
      <textarea value={command} onChange={(e) => setCommand(e.target.value)} />
      <div>
        <label>Volume:</label>
        <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
      </div>
      <div>
        <label>Rate:</label>
        <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={handleRateChange} />
      </div>
      <button onClick={handleListen}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default VoiceCommands;
