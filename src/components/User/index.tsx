import React, { useState, useEffect }  from 'react';

import AsideLoagind from '../Shimmer/AsideLoading';

import user1 from '../../assets/user1.png';

import { Container } from './styles';

interface IUserProps{
  color?:boolean
}

const User: React.FC<IUserProps> = ({color}) => {
  const [isloading, setIsoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsoading(false);
    }, 1000);
  },[isloading, setIsoading]);


  return (
    <Container  cor={color ? true: false}>
      {
        isloading ? 
          (
           
            <AsideLoagind/>
            
          ) 
        : 
        (
          <>
            <img src={user1} alt={user1} />
            <div>
                <h3>User</h3>
                <h4>Title post</h4>
            </div>
          </>
        )
      }
        
    </Container>
  );
}

export default User;