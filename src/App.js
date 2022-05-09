import React from 'react';
import About from './components/About';
import Header from './components/Header';
import "./App.css";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
