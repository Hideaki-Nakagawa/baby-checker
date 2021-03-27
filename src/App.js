import logo from './logo.svg';
import './App.css';
import GoodBtn from './component/GoodBtn.jsx';
import BadBtn from './component/BadBtn.jsx';
import { Grid } from '@material-ui/core';

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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <GoodBtn />
          <BadBtn />
        </Grid>
      </header>
    </div>
  );
}

export default App;
