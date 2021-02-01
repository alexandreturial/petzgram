import React from 'react';


import user1 from '../../assets/user1.png';

import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
        <img src={user1} alt={user1} />
        <div>
            <h3>User</h3>
            <h4>Title post</h4>
        </div>
    </Container>
  );
}

export default User;