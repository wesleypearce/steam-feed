import React from 'react';
import Game from './Game';

const GameList = ({ gameList }) => {
  return (
    <div>
      {gameList.length === 0 ? (
        <h1>No games found</h1>
      ) : (
        gameList.map(game => <Game key={game.appid} game={game} />)
      )}
    </div>
  );
};

// const GameList = ({ gameList }) => {
//   console.log(Array.isArray(gameList));
//   console.log(gameList);
//   return <div>Hi</div>;
// };

export default GameList;
