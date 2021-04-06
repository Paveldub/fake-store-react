import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
