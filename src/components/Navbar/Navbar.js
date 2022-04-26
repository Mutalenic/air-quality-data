import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';

const Navbar = () => (
  <div className="navbarContainer">
    <div className="LeftIcon">
      <NavLink to="/">
        <IoIosArrowBack className="leftArrow" />
      </NavLink>
      <span className="yearData"> 2022</span>
    </div>
    <h3>Most views</h3>

    <div className="rightIcons">
      <FaMicrophone className="mic" />
      <IoIosSettings className="gear" />
    </div>
  </div>
);

export default Navbar;
