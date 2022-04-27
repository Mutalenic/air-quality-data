import React from 'react';
import './Home.css';
import worldmap from '../../img/worldmap.jpg';

const Home = () => (
  <>
    <div>
      <img src={worldmap} alt="world map" className="map" />
    </div>
    <h1>Countries</h1>
    <form>
      <select>
        <option value="Africa" defaultValue>
          {' '}
          Africa
          {' '}
        </option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button type="submit">Search Region</button>
    </form>
  </>
);
export default Home;
