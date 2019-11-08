import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';

import './main.css';

const Board = ({
  cards,
  flipped,
  solved,
  disabled,
  handleClick,
  dimension,
}) => (
  <div
    style={{ width: dimension, height: dimension }}
    className="board-container"
  >
    {cards.map(card => (
      <Card
        key={`${card.type}${card.id}`}
        id={card.id}
        type={card.type}
        flipped={flipped.includes(card.id)}
        solved={solved.includes(card.id)}
        disabled={disabled || solved.includes(card.id)}
        handleClick={handleClick}
        width={dimension / 4.5}
        height={dimension / 4.5}
      />
    ))}
  </div>
);

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(Number).isRequired,
  solved: PropTypes.arrayOf(Number).isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
};

export default Board;
