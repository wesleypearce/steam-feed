import React, { useState } from 'react';
import axios from 'axios';
import GameList from './GameList';

const games = [
  { appid: 216938, name: 'Pieterw test app76 ( 216938 )' },
  { appid: 660010, name: 'test2' },
  { appid: 660130, name: 'test3' },
  { appid: 1225100, name: 'SSTR' },
  { appid: 1225120, name: 'Krystopia: Nova´s Journey' },
  { appid: 1225140, name: 'Hunt: Showdown - Zhong Kui' },
  { appid: 1225190, name: "Lenna's Inception Soundtrack" },
  { appid: 1225210, name: 'Warstone - Tower Power Pack' },
  { appid: 1225240, name: 'Humble Rumble' },
  { appid: 1225300, name: 'Bus Driver Simulator 2019 - Tourist' },
  { appid: 1225310, name: 'Gunpowder on The Teeth: Arcade Soundtrack' }
];

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
      <GameList gameList={games} />
    </div>
  );
};

export default Searchbar;
