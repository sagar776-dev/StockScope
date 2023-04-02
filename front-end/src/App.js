import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MarketNews from './pages/MarketNews';
import Stocks from './pages/Stocks';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route key="home" path="/" element={<Home />} />
        <Route key="search" path="/search" element={<Search />} />
        <Route key="market-news" path="/market-news" element={<MarketNews />} />
        <Route key="stocks" path="/stocks" element={<Stocks />} />
        <Route key="profile" path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
