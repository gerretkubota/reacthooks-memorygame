import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const Card = ({
  id,
  flipped,
  type,
  back,
  width,
  height,
  solved,
  disabled,
  handleClick,
}) => (
  <div
    style={{ width, height }}
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    onClick={() => (disabled ? null : handleClick(id))}
  >
    <div className="flipper">
      <img
        style={{ width, height }}
        className={flipped ? 'front' : 'back'}
        src={
          flipped || solved
            ? `../src/components/Card/imgs/${type}.png`
            : '../src/components/Card/imgs/back.png'
        }
        alt={type}
      />
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
