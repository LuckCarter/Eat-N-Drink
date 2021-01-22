import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: black;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70px;

  ${Container}
`;

export const IconCart = styled.div`
display: block;
position: absolute;
top: 50px;
right: 2px;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  position: absolute;
  top: 90px;
  left: ${({ click }) => (click ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: black;

  padding:0px 6px 0px 6px;
}
`;

export const NavItem = styled.li`

`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}

`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
}

`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
