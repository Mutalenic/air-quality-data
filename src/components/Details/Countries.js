import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Africa from '../Maps/Africa.png';
import Antarctic from '../Maps/Antarctic.png';
import Asia from '../Maps/Asia.png';
import Europe from '../Maps/Europe.png';
import Oceania from '../Maps/Oceania.png';
import Navbar from '../Navbar/Navbar';
import America from '../Maps/America.png';
import Country from '../Home/Country';
import { getCountries } from '../../redux/Actions/Countries';

const Countries = () => {
  const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  if (!countries.length) {
    return (
      <div className="m-2">
        <p>Loading</p>
        <NavLink to="/" className="link text-light">
          <p>Click to reload</p>
          <FontAwesomeIcon icon={faRefresh} className="icon" text="reload" />
        </NavLink>
      </div>
    );
  }
  let region1 = countries[0].region;
  if (region1 === 'Africa') region1 = Africa;
  else if (region1 === 'Asia') region1 = Asia;
  else if (region1 === 'Europe') region1 = Europe;
  else if (region1 === 'Oceania') region1 = Oceania;
  else if (region1 === 'America') region1 = America;
  else region1 = Antarctic;
  return (
    <div>
      <Navbar id="/" />
      <div className="row m-4">
        <div className="col-12 d-flex justify-content-center align-items-center border gap-4">
          <h3>{countries[0].region}</h3>
          <img src={region1} alt="" className="m-2 img1" />
        </div>
        {
          countries.map((country) => (
            <Country
              key={country.code}
              id={country.code}
              name={country.name.common}
              lat={country.latlng[0]}
              lng={country.latlng[1]}
              population={country.population}
              region={country.region}
              flag={country.flag}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Countries;
