import React, { useState, useEffect } from 'react';

import { generateCards } from './util/utils.js';
import Board from './components/Board/Board.jsx';

import './main.css';

const App = () => {
  // State hooks
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  // Behavior of componentDidMount
  useEffect(() => {
    setCards(generateCards());
    resizeBoard();
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return window.removeEventListener('resize', resizeListener);
  });

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);

    return clickedCard.type === flippedCard.type;
  };

  const reset = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const hardReset = () => {
    setFlipped([]);
    setSolved([]);
    setCards(generateCards());
  };

  const sameCardClicked = id => flipped.includes(id);

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        reset();
      } else {
        setTimeout(reset, 2000);
      }
    }
  };

  return (
    <div className="app-container">
      <h2>Memory Game</h2>
      <Board
        cards={cards}
        flipped={flipped}
        solved={solved}
        disabled={disabled}
        handleClick={handleClick}
        dimension={dimension}
      />
    </div>
  );
};

export default App;
