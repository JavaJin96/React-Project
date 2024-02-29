import logo from './logo.svg';
import './App.css';
import MyButton from './study01/App.js';
import Rsp from './study01/RSPgames';
import Game from './study01/Game.js';
import Ui from './study01/ui.js'

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
      <div className="App">
          <header className="App-header">
              <Ui />
          </header>
      </div>
  )
}

export default App;
