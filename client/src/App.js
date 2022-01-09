import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>
        <Link to="/">Home</Link>
        </h1>
        <br />
        <h1>
        <Link to="/otherpage">Other Page</Link>
        </h1>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
