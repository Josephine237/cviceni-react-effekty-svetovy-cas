import React from 'react';
import { render } from 'react-dom';
import { WorldTime } from './components/WorldTime/worldtime';
import './style.css';

const App = () => {
  return (
    <>
      <WorldTime />
    </>
  )
};

render(<App />, document.querySelector('#app'));
