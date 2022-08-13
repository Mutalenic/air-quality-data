import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Regions from './components/Home/Region';
import Countries from './components/Details/Countries';
import Pollutions from './components/Home/Pollution';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/pollution" element={<Pollutions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
