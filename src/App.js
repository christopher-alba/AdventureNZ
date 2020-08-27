import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
    </div>
  );
}

export default App;
