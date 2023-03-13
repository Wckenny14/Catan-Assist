import Hamburger from './Hamburger';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
// import catanLogo from '../../img/catanLogo.png'

const NavBar = () => {
  return (
      <div className="NavBar">
        <div className='NavBar-items'>
          <div>
          <NavLink to='/'><h1>CATAN</h1></NavLink>
          </div>
          
        </div>
        <div className='Hamburger-Nav'>
          <Hamburger />
        </div>
        {/* <hr className='NavBar-divider'/> */}
      </div>
  );
}

export default NavBar;


