import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Africa from '../Maps/Africa.png';
import Antarctic from '../Maps/Antarctica.png';
import Asia from '../Maps/Asia.png';
import Europe from '../Maps/Europe.png';
import America from '../Maps/America.png';
import Oceania from '../Maps/Oceania.png';
import { getCountries } from '../../redux/Actions/Countries';
import './Region.css';

const Region = (props) => {
  const { region, regionCountry } = props;
  const dispatch = useDispatch();
  let region1;
  if (region === 'Africa') region1 = Africa;
  else if (region === 'Asia') region1 = Asia;
  else if (region === 'Europe') region1 = Europe;
  else if (region === 'Oceania') region1 = Oceania;
  else if (region === 'America') region1 = America;
  else region1 = Antarctic;
  return (
    <div className="col-6 col-lg-4 col-md-4 regionBorder">
      <div className="region d-flex justify-content-between">
        <div className="d-flex flex-column">
          <img src={region1} alt="" className="m-2 img" />
          <div className="regionDetails">
            <button
              key={region}
              type="button"
              className="btn mt-2"
              onClick={() => {
                dispatch(getCountries(region));
              }}
              to="/countries"
            >
              <NavLink to="/countries" className="link m-2 text-light">
                <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
              </NavLink>
            </button>
            <p className="regionName">
              {region}
            </p>
            <p>
              {regionCountry}
              {' '}
              Countries
            </p>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
Region.propTypes = {
  region: PropTypes.string.isRequired,
  regionCountry: PropTypes.number.isRequired,
};

export default Region;
