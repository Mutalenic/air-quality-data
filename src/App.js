import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TownDetails from './components/Details/Details';

const App = () => (
  <div className="spaceApp">
    <Navbar />
    <Home />
    <Routes>
      <Route path="profile" element={<TownDetails />} />
    </Routes>
  </div>
);

export default App;
