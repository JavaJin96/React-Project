import logo from './logo.svg';
import MyButton from './study01/App.js';
import './App.css';
import Rsp from './study01/RSPgames';
import Game from './study01/Game.js';
import Home from './study01/Home.js';
import NBGame from './study01/NBGame.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/*function App() {
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
        <Rsp />
        <Game />
      </header>
    </div>
  );
}*/

function App(){
  return(
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/rspGame" element={<Game />}/>
              <Route path="/numberBaseball" element={<NBGame />}/>
          </Routes>
        </div>

      </Router>
      /*<div className="App">
          <header className="App-header">
              <Ui />
          </header>
      </div>*/
  )
}

export default App;
