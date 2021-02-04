import React from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

import Menu from '../../components/Footer';


import { Container, Footer } from './styles';

const Layout: React.FC = ({children}) => {
  return (
    <Container>
        <Header/>
        {children}
        <Aside/>
        <Footer>
          <Menu />
        </Footer>
    </Container>
  );
}

export default Layout;