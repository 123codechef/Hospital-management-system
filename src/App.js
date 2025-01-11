import React, { useState, useEffect } from 'react';
import './App.css';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hospital Food Management System</h1>
        <PatientList />
      </header>
    </div>
  );
}

export default App;
