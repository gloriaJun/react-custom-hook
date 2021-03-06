import React from 'react';
import useNetwork from './useNetwork';

function App() {
  const online = useNetwork();

  return (
    <div className="App">
      <h2>Hello!, { online ? 'online' : 'offline'}</h2>
    </div>
  );
}

export default App;
