import React from 'react';

const GameList = ({ gameList }) => {
  return (
    <div>
      {gameList.length === 0 ? (
        <h1>No games found</h1>
      ) : (
        gameList.map(game => <div key={game.id}>{game.name}</div>)
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
