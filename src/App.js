// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';

function App() {
  const appStyle = {
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
    minHeight: '100vh',
    padding: '2rem 0',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#222'
  };

  return (
    <div style={appStyle}>
      <h1 style={headingStyle}>⚽ FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
