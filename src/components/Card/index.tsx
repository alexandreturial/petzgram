import React from 'react';

import {
  BsBookmark,
  BsChatDots,
  BsCursor,

} from "react-icons/bs";

import Heart from '../InputAnimated';
import User from '../User';



import { 
  Container, 
  Image, 
  FooterCard 
} from './styles';

interface ICardProps{
  index: number,
  cardPosition: number,
  image: string,
  
}

const Card: React.FC<ICardProps> = ({
  index,
  cardPosition,
  image
}) => {
  return (
      <Container key={index} CardPosition={cardPosition} image={image}>
        <header>
          <User />
        </header>
        <Image >
          <img src={image} alt={image} />
        </Image>
        <FooterCard>
          <Heart id={index} />
          <BsCursor size={25} />
          <BsChatDots size={25} />
          <BsBookmark size={25} />
        </FooterCard>
      </Container>
  );
}

export default Card;