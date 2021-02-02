import React from 'react';
import User from '../User';

import { Container } from './styles';

const Aside: React.FC = () => {
  return (
      <Container>
          <User  color={true}/>
          <User  color={true}/>
          <User  color={true}/>
          <User  color={true}/>
          <User  color={true}/>
      </Container>
  );
}

export default Aside;