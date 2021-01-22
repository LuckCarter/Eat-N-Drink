import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItemBtn,
  NavBtnLink,
  IconCart
} from './Navbar.elements';
import { FaCartArrowDown } from 'react-icons/fa';
import {Link} from 'react-router-dom'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/home' onClick={closeMobileMenu}>
              E.N'.D
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItemBtn>
                <NavBtnLink to='/home' onClick={closeMobileMenu}>
                  <Button>
                  Home
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
              <NavItemBtn>
              
                <NavBtnLink to='/allMenu' onClick={closeMobileMenu}>
                  <Button>
                  Menu
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
              <button></button>
            </NavMenu>
            <IconCart >
              <Link to='panier'>
              <FaCartArrowDown/>
              </Link>
            </IconCart>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
