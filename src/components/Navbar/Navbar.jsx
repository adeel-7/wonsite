import { useState } from 'react';
import './Navbar.css';
import Logo from '../../../src/assets/final_Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);


  return (
    <div className="header navbarWrapper">
        <div className="logo">
          <img src={Logo} alt="logo" className="mainLogo" />
        </div>

        <div className="navbarElements">
        {menuOpened === false && mobile === true ? (
            <div style={{
              backgroundColor: 'var(--yellow)', 
              padding: '1rem', 
              borderRadius: '5px'
              }}
            onClick={() => setMenuOpened(true)}  
            >
              <i className='bx bx-align-middle' style={{color: 'white', fontSize: '25px'}}></i>
            </div>

          ) : ( <ul className="header-menu"> 
          
          <li onClick={() => setMenuOpened(false)}>Home</li>

          <li>
            <Link onClick={() => setMenuOpened(false)} 
            to="services"
            span={true} 
            smooth={true}
            >Our Services</Link></li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
            to="providers" 
            span={true} 
            smooth={true}
            >
              Our Team</Link>
          </li>
          
          <li>
            <Link onClick={() => setMenuOpened(false)}
            to="directors" 
            span={true} 
            smooth={true}
            >
            Directors</Link>
          </li>
          
          <li>
            <Link 
              onClick={() => setMenuOpened(false)} 
              to="testimonials" 
              span={true} 
              smooth={true}
            > Testimonials</Link>
          </li>

          <li>
            <Link 
              onClick={() => setMenuOpened(false)} 
              to="contactus" 
              span={true} 
              smooth={true}
            > Contact Us</Link>
          </li>
      </ul> )
      }
        </div>
    </div>
  )
}

export default Navbar