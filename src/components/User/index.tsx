import React from 'react';


import img1 from '../../assets/dog1.jpg';

import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
        <img src={img1} alt={img1} />
        <div>
            <h3>User</h3>
            <h4>Title post</h4>
        </div>
    </Container>
  );
}

export default User;