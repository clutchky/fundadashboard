import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  list-style-type: none;
`;

function Navigation() {
  return (
    <StyledNav>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/stocks">Stocks</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </li>
    </StyledNav>
  );
}

export default Navigation;
