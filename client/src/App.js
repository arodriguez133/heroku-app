import React, { useState, useEffect } from 'react';
import './App.css';

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:1234${path}` : path
}

function App() {
  const [data, setData] = useState("Hi");

  useEffect(() => {
    fetch(url("/api/"))
      .then(res => res.json())
      .then(apiData => setData(apiData.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
