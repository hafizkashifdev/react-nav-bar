import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact  path="/about" Component={About} />
        <Route  exact path="/services" Component={Services} />
      </Routes>
    </div>
  );
}

export default App;
