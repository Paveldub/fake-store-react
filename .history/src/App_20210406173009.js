import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={ProductList} />
      </Router>
    </div>
  );
}

export default App;
