import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const Card = ({ id, flipped, front, back, width, height, handleClick }) => (
  <div
    style={{ width, height }}
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    onClick={() => handleClick(id)}
  >
    <div className="flipper">
      <img
        style={{ width, height }}
        className={flipped ? 'front' : 'back'}
        src={
          flipped
            ? `./components/Card/imgs/${front}.png`
            : `./components/Card/imgs/${back}.png`
        }
        alt={front}
      />
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
