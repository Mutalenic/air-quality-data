import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRefresh } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const { id } = props;
  return (
    <div className="shadow-lg">
      <nav>
        <div className="navBarContainer">
          <button
            type="button"
            className="btn"
          >
            <NavLink to={id} className="link text-light">
              <FontAwesomeIcon icon={faHome} className="icon" />
            </NavLink>
          </button>
          <h1 className="header">Air Quality</h1>
          <NavLink to="/" className="link text-light">
            <FontAwesomeIcon icon={faRefresh} className="icon" text="reload" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Navbar;
