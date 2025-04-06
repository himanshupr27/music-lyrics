import React, { useState } from 'react';
import '../../css/Navbar.css';
import { FaSearch,FaMicrophone,FaHeart,FaUserCircle } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
   <Navbar dark expand="md" className="nav-bar">
        <NavbarBrand href="/">
        <img src='/Images/trans.png' id='logo'/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} >
          <FaUserCircle className="outer-search-icon" id="user-img"/> 
          </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem >
              <NavLink href="/" className="nav-items active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs" className="nav-items">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="nav-items">Contact</NavLink>
            </NavItem>
          </Nav>


          <Navbar className="nav-bar-left">

          {/* <FaHeart className="outer-search-icon"/>
          <MdShowChart className="outer-search-icon"/> */}

          <NavLink href="/login" className='login'>
          <FaUserCircle className="outer-search-icon" id="user-img"/>
          Login
          </NavLink>
          </Navbar>
        </Collapse>
      </Navbar>
  </>
  )
}

export default NavbarTop
