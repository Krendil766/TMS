import './App.css';
import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Day0203 from './components/02.03';
import Day0503 from './components/05.03';
import Day2502 from './components/25.02';
import Day1902 from './components/19.02';




export default function App() {
  return (
    <Router>
      <div className = "App">
        <nav >
          <ul className = 'app-ul'>
            <li>
              <button>
              <Link to="/190221">19/02/21</Link>
              </button>
            </li>
            <li>
              <button>
              <Link to="/250221">25/02/21</Link>
              </button>
            </li>
            <li>
              <button>
              <Link to="/020321">02/03/21</Link>
              </button>
            </li>
            <li>
              <button>
              <Link to="/050321">05/03/21</Link>
              </button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/190221">
            <Day1902 />
          </Route>
          <Route path="/250221">
            <Day2502 />
          </Route>
          <Route path="/020321">
            <Day0203 />
          </Route>
          <Route path="/050321">
            <Day0503 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

