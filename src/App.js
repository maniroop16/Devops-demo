import logo from './logo.svg';
import './App.css';

function App() {
  let page = "This is smallapp";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <b>{page}</b>
        <p>
          For GIT Session
        </p>
        <p>I added something</p>
        <h1>addes2</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
