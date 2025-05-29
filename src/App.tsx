import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<div className="p-4">Features Page</div>} />
        <Route path="/about" element={<div className="p-4">About Page</div>} />
      </Routes>
    </div>
  );
}

export default App;