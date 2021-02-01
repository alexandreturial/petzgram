import React from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { Container } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <Container>
        <Header/>
        {children}
        <Aside/>
    </Container>
  );
}

export default Layout;