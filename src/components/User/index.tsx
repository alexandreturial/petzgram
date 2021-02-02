import React from 'react';


import user1 from '../../assets/user1.png';

import { Container } from './styles';

interface IUserProps{
  color?:boolean
}

const User: React.FC<IUserProps> = ({color}) => {
  return (
    <Container  cor={color ? true: false}>
        <img src={user1} alt={user1} />
        <div>
            <h3>User</h3>
            <h4>Title post</h4>
        </div>
    </Container>
  );
}

export default User;