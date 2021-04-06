import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductDetails } from './components/ProductDetail';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route>404 NOT FOUND</Route>
      </Router>
    </div>
  );
}

export default App;
