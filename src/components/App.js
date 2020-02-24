import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './Searchbar';
import '../style.css';

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
