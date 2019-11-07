import React, { useState, useEffect } from 'react';

import { generateCards } from './util/utils.js';
import Board from './components/Board/Board.jsx';

import './main.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const handleClick = id => {
    setFlipped([...flipped, id]);
  };

  return (
    <div className="app-container">
      <h2>Memory Game</h2>
      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  );
};

export default App;
