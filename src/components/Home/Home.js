import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/Country/countries';
import './Home.css';
import worldmap from '../../img/worldmap.jpg';

const Home = () => {
  const [region, setRegion] = useState('Europe');
  const dispatch = useDispatch();
  const handler = (e) => {
    e.preventDefault();
    const newRegion = e.target.selected.value;
    setRegion(newRegion);
    dispatch(getCountries(newRegion.toLowerCase()));
  };
  const countries = useSelector((state) => state.country_name);
  const { country } = countries;
  return (
    <div className="home">
      <div>
        <img src={worldmap} alt="world map" className="map" />
      </div>
      <div>
        <p>{region}</p>
        <span>
          {' '}
          {country.length !== 0 ? country[0].length : ' '}
          countries
          {' '}
        </span>
        <form onSubmit={(e) => handler(e)}>
          <select name="selected">
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
      </div>
    </div>
  );
};
export default Home;
