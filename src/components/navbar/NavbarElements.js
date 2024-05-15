import styled from "styled-components";


export const Nav = styled.nav`

width: 100%;
z-index: 100;
position: fixed;
background: #ffc500;;
  // background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLink = styled.a`
  color: black;
  // border-color: #e9ba23;
  // border-style: solid;
  // border-width: 0 6px 6px 0;
  padding: 0 6px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
  
`;
export const NavIcon = styled.div`

padding: 6px;
  font-size: 28px;

  cursor: pointer;
  color: #fff;
  color: black;
  &:hover {
    color: white;
  }
`;
