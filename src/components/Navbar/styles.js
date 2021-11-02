import styled from 'styled-components';

export const Navbar = styled.div`
  display: block;
  width: 100%;
  background: #000;
  color: #fff;
  position: static;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .navbar-toggle {
    display: none;
  }

  @media (max-width: 1027px) {
    .navbar-toggle {
      display: block;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 80px;
  padding-left: 25px;
`;

export const NavbarTitle = styled.div`
  white-space: nowrap;
  margin-left: 15px;
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 1027px) {
    display: none;
  }

  @media (max-width: 770px) {
    display: block;
  }
`;
