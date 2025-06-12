import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Feedback from './pages/Feedback';
import AdminLogin from './pages/AdminLogin';
import Navbar from './components/Navbar';

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  )
}
export default App