import React, { useState, useRef } from 'react';
import './Navbar.css';
// import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="Logo" /> */}
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        
        <li>
          <AnchorLink href="#home" className='a-link' onClick={() => setMenu("home")}>Home</AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#about" className='a-link' onClick={() => setMenu("about")}>About me</AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#services" className='a-link' onClick={() => setMenu("services")}>Services</AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#work" className='a-link' onClick={() => setMenu("work")}>Portfolio</AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink href="#contact" className='a-link' onClick={() => setMenu("contact")}>Contact</AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink href="#contact" className='a-link'>Connect with me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
