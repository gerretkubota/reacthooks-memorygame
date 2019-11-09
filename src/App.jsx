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

  /**
   * @description
   * Preload images to have a smoother transition within the app when started
   */
  const preloadImages = () => {
    cards.map(card => {
      const src = `../src/components/Card/imgs/${card.type}.png`;
      return (new Image().src = src);
    });
  };
  /**
   * @description
   * resizeBoard will take the client's lowest width or height
   * The purpose of this is function is to make the application responsive.
   */
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };
  /**
   *
   * @param {number} id
   * isMatch function will identify if the id matches with the id's that are instanstiated
   * in the cards array and flipped array
   * Ultimately, it will check if the clicked and flipped cards match its type
   */
  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);

    return clickedCard.type === flippedCard.type;
  };
  /**
   * reset function will clear the flipped array and set disabled as false
   */
  const reset = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const hardReset = () => {
    setFlipped([]);
    setSolved([]);
    setCards(generateCards());
  };
  /**
   *
   * @param {number} id
   * sameCardClicked will check if the card is already flipped or not
   */
  const sameCardClicked = id => flipped.includes(id);
  /**
   *
   * @param {number} id
   * handleClick will handle the game's logic
   * The function will check if cards are flipped, if there is already a card flipped,
   * it will check if the flipped card's type matches the clicked card's type.
   * If it does, then it will add the card's id to the solved array to keep track
   * If not, it will reset the flipped cards.
   */
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
  /**
   * @description
   * Behavior of componentDidMount
   * generateCards and set it to the cards state hook
   * resize the board in respect to the client's window size
   */
  useEffect(() => {
    setCards(generateCards());
    resizeBoard();
  }, []);
  /**
   * @description
   * Preload the images after the cards have been loaded
   */
  useEffect(() => preloadImages());
  /**
   * @description
   * Clean up the event listeners
   */
  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return window.removeEventListener('resize', resizeListener);
  });

  return (
    <div className="app-container">
      <div className="header">
        <h2>Memory Game</h2>
        <button type="button" onClick={hardReset}>
          RESET
        </button>
      </div>
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
