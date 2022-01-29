import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Choices } from './components/Choices';
import { Timer } from './components/Timer';

function click() {
  console.log('choices');
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Timer />
      </header>
    </div>
  );
}

export default App;
