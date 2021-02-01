import React from 'react';
import { Link } from 'react-router-dom';

import { 
    BsHouseDoor,
    BsPlusCircle,
    BsSearch,
    BsPerson,
    BsHeart
} from "react-icons/bs";


import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
            <Link to="/">
              <BsHouseDoor size={25} color="white"/>
            </Link>
            
            <BsSearch size={25} color="white"/>
            <BsPlusCircle size={45} color="white"/>
            <BsHeart size={25} color="white"/>
            <BsPerson size={25} color="white"/> 
      </Container>
  );
}

export default Footer;