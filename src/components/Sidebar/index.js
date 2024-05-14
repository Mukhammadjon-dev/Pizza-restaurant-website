import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        
        <SidebarLink href="#Hero"> Home </SidebarLink>
        <SidebarLink href="#Products"> Foods </SidebarLink>
        <SidebarLink href="#Feature"> Food Blog </SidebarLink>
        <SidebarLink href="#CarouselComponent">Day Offer</SidebarLink>
        <SidebarLink href="#PauseOnHover">Sweets</SidebarLink>
        <SidebarLink href="#Footer"> Contact </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};
export default Sidebar;
