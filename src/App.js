import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import SearchBar from './components/Search/SearchBar';

const App = (params) => {
  
return (
  <div className="containerApp">
    <Header />
    <Home />
    <Routes>
      <Route exact path="/" element={<SearchBar />} />
      </Routes>
    
    </div>
)
}