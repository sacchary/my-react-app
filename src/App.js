import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    /** alert('You clicked me!'); **/
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
      </header>
    </div>
  );
}
export default App;

