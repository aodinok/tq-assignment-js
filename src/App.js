import React from 'react';

import ProductList from './containers/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png"
          alt="Tiqets.com"
        />
      </header>
      <main className="App-main">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
