// This code adds a volume and a rate state variable to the component, as well as two input range elements and their corresponding change handlers. The volume and rate state variables are used to store the current volume and rate values, respectively, and the input range elements allow the user to adjust these values by dragging a slider.



// This code uses the window.speechSynthesis object and the SpeechSynthesisUtterance constructor to synthesize the audio, and sets the volume and rate properties of the utterance object to the values stored in the volume and rate state variables, respectively. The speak function is then called when the user clicks the Send button to synthesize and play the audio.

// You can then use the speak function in other parts of the component as needed to synthesize and play audio for the user. For example, you could use it to provide feedback to the user when the command is received or when an error occurs





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

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new Speech
