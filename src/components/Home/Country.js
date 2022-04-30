import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getPollutionData } from '../../redux/Actions/Pollution';
import './Country.css';

const Country = (props) => {
  const {
    id, name, lat, lng, population, flag,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="mainContainer">
      <div className="mainFlagContainer">
        <div className="flex-column flagContainer">
          <img src={flag} alt="flag" className="m-2 img" />
          <p className="Flagname">
            {name}
          </p>
          <p className="populationTotal">
            Population:
            {' '}
            {population}
          </p>

          <button
            key={id}
            type="button"
            className="flagButton"
            onClick={() => {
              dispatch(getPollutionData(parseInt(lat, 10), parseInt(lng, 10), flag, name));
            }}
          >
            <NavLink to="/pollution" className="link m-2 text-light">
              <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
Country.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
