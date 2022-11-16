import React, { useState, useEffect } from 'react';
import './App.css';

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:1234${path}` : path
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <p>I got the app to run with no errors</p>
      </header>
    </div>
  );
}

export default App;
