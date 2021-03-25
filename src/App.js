import logo from './logo.svg';
import './App.css';
import Btn from './component/Btn.jsx';

function App() {
  const showMessage = () =>{
    console.log('Push');
  }
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
        <Btn title="テスト" className="btn btn-primary" func={showMessage}/>
      </header>
    </div>
  );
}

export default App;
