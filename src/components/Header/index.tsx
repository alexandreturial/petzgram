import React from 'react';
import { Link } from 'react-router-dom';


import { Container, Options, Logo } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo>
            <Link to="/">Petzgram</Link>
          </Logo>
          <Options>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Options>
      </Container>
  );
}

export default Header;