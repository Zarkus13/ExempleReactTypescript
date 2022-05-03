import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header color="green">
          <Link to="/test">Go to test page !</Link>
        </Header>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Footer backgroundColor="blue" />
      </header>
    </div>
  );
}

export default App;
