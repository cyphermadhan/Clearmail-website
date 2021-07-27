import './App.css';
import React from 'react';

import Header from './Components/Header';
import Firstfold from './Components/Firstfold';
import Features from './Components/Features';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <Header/>
      <Firstfold/>
      <Features/>
      <Contactus/>
    </div>
  );
}

export default App;
