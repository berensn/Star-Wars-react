import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinq = styled(NavLink).attrs({
  activeClassName: 'navSelected',
})`
  &:.navSelected{
    font-weight: 600;
  }
  &:hover{
    font-weight: 600;
  }
`;

export const NavItem = styled.span`
  padding: 10px;
  font-family: Roboto;
`;

export const NavElements = styled.nav`
  text-align: center;
  background-color: #222;
  padding: 10px 0px 10px 0px;	
  width: 100%;
  margin: auto;
  border-bottom: 1px solid #333;
  margin-bottom: 20px;
`;