import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const Home = () => <div>Home</div>
const Test = () => <div>Test</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> hlavicka</div>
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
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
