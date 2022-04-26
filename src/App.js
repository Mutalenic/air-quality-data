import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';

const App = () => (
  <div className="spaceApp">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
