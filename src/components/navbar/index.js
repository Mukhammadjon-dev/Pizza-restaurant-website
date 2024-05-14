import React from "react";
import { Nav, NavIcon, NavLink } from "./NavbarElements";
import Menu from '@material-ui/icons/Menu';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink href="#Hero"> Food 
        
        <FastfoodIcon fontSize="large" className="mb-2 mt-0 m-2"/>
        
        </NavLink>
        <NavIcon onClick={toggle}>
        <Menu/>
           Menu
        </NavIcon>
      </Nav>
    </>
  );
};
export default Navbar;
