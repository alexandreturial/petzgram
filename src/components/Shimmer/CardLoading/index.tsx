import React from 'react';

import Skeleton from '../../Skeleton';

import { 
    Container,
} from './styles';


interface ICardProps{
    cardPosition: number,
}

const CardLoading: React.FC<ICardProps> = ({cardPosition}) => {
  return (
    <Container CardPosition={cardPosition}>
        {/* <header> 
        </header> */}
        <Skeleton className="img-skeleton"/>
        <footer>
          <Skeleton className="footer-skeleton"/>
        </footer>
        {/* <SkeletonFooter className="footer-skeleton"/> */}
    </Container>
  );
}

export default CardLoading;
