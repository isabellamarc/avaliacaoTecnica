import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <FrontPage /> } />
    </Routes>
  );
}

export default App;
