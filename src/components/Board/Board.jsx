import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';

import './main.css';

const Board = ({ cards, flipped, handleClick }) => (
  <div className="board-container">
    {cards.map(card => (
      <Card
        id={card.id}
        type={card.type}
        back="back"
        flipped={flipped.includes(card.id)}
        handleClick={handleClick}
        height={100}
        width={100}
      />
    ))}
  </div>
);

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(Number).isRequired,
  handleClick: PropTypes.func.isrequired,
};

export default Board;
