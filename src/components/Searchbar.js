import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Searchbar = () => {
  const [searchString, setSearchString] = useState('');
  const [query, setQuery] = useState('');
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    console.log(gameList);
  });

  const requestGames = searchString => {
    axios
      .get('http://localhost:3001/game/')
      .then(({ data }) => setGameList(data))
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
    </div>
  );
};

export default Searchbar;
