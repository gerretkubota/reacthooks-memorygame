import React, { useState } from 'react';

import Card from './components/Card/Card.jsx';

const App = () => {
  const [flipped, setFlipped] = useState([]);

  const handleClick = id => {
    setFlipped([...flipped, id]);
  };

  return (
    <div>
      <h2>Memory Game</h2>
      <Card
        id={1}
        flipped={flipped.includes(1)}
        front="react"
        back="back"
        width={100}
        height={100}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
