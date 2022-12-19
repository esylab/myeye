import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VoiceCommands = () => {
  const [command, setCommand] = useState('');
  const [isListening, setIsListening] = useState(false);

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

  return (
    <div>
      <textarea value={command} onChange={(e) => setCommand(e.target.value)} />
      <button onClick={handleListen}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default VoiceCommands;
``
