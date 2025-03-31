import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import DestinationGrid from './components/DestinationGrid';
import DestinationPage from './pages/DestinationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Hero />
            <DestinationGrid />
          </div>
        } />
        <Route path="/destination/:id" element={<DestinationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;