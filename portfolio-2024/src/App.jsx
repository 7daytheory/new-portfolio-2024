import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Experience />
    </div>
  );
}

export default App;
