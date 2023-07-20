import  React, { useState } from "react";
import "../navbar.css";
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav"  defaultActiveKey="/home" >
      <LinkContainer to="/">
         <a className="nav__brand">Cake + Art</a> 
      </LinkContainer>
      
      <ul className={active}>
        <li className="nav__item">
          <LinkContainer to="/fondant" className="nav__link">
          <a className="nav__link">Fondant Cakes</a> 
        </LinkContainer>
        </li>
        <li className="nav__item">
        <LinkContainer to="/icing">
         <a className="nav__link">Icing Cakes</a> 
        </LinkContainer>
        </li>
        <li className="nav__item">
          <LinkContainer to="/dessert">
            <a className="nav__link">Dessert Table</a> 
          </LinkContainer>
        </li>
        <li className="nav__item">
          <LinkContainer to="/prices">
            <a className="nav__link">Prices</a> 
          </LinkContainer>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
    </nav>
  );
}

export default Navbar;