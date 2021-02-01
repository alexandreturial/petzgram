import React from 'react';
import User from '../User';

import { Container } from './styles';

const Aside: React.FC = () => {
  return (
      <Container>
          <User/>
          <User/>
          <User/>
          <User/>
          <User/>
      </Container>
  );
}

export default Aside;