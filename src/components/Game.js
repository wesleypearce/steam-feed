import React from 'react';

const Game = ({ game }) => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <a href="#" onClick={handleClick}>
        {game.name}
      </a>
    </div>
  );
};

export default Game;
