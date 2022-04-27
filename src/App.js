import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import { addTowns } from './redux/Town/town';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTowns());
  }, []);

  return (
    <div className="spaceApp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
