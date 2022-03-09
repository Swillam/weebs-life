import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/navBar.css'

function NavBar() {
    return (
    <nav>
      <Link to="/"> 
        <div className='box'>
        <img
              src={logo}
              className="d-inline-block align-top navIcon"
              alt="navIcon"
            />
            <span className='navTitle'>WeebsLife</span>
        </div>
      </Link>
      <div>
        <Link to="/random">Random</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
  