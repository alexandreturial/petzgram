import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const AsideLoading: React.FC = () => {
  return (
      <Container>
        <Skeleton className="img-skeleton white"/>
        
        <Skeleton className="bar-skeleton white"/>
      </Container>
  );
}

export default AsideLoading;