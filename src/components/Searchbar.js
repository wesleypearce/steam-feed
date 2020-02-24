import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameList from './GameList';

const Searchbar = () => {
  const [searchString, setSearchString] = useState('');
  const [gameList, setGameList] = useState([]);

  const requestGames = searchString => {
    axios
      .get(`http://localhost:3001/game/${searchString}`)
      .then(({ data }) => {
        setGameList(data);
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestGames(searchString);
        }}
      >
        <label htmlFor="search-string">Search</label>
        <input
          type="text"
          placeholder="search.."
          onChange={e => setSearchString(e.target.value)}
        />
      </form>
      <GameList gameList={gameList} />
    </div>
  );
};

export default Searchbar;
