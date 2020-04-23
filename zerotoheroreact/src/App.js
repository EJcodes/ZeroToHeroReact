import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person/>
    </div>
  );
}

export default App;
