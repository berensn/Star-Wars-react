import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinq = styled(NavLink).attrs({
  activeClassName: 'navSelected',
})`
  &:.navSelected{
    font-weight: 600;
  }
<<<<<<< HEAD
  &:hover{
    font-weight: 600;
  }
=======
>>>>>>> 166b9ca4f23f8b6529f67bd3a068e70cd3809ab2
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