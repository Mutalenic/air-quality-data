import { NavLink } from 'react-router-dom';
// import './Navbar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import navbar from './Navbar.module.css';

const Navbar = () => (
  <div className={navbar.contanier}>
    <div className={navbar.left_side}>
      <NavLink to="/">
        <IoIosArrowBack className={navbar.left_side_size} />
      </NavLink>
      <span className={navbar.left_side_size}> 2022</span>
    </div>
    <h3>Most views</h3>

    <div className={navbar.right_side}>
      <FaMicrophone className={navbar.icon} />
      <IoIosSettings className={navbar.icon_gear} />
    </div>
  </div>
);

export default Navbar;
