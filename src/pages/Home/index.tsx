import React, {useState, useEffect} from 'react';

import img1 from '../../assets/dog1.jpg';
import img2 from '../../assets/dog2.jpg';
import img3 from '../../assets/cat1.jpg';
import img4 from '../../assets/cat2.jpg';
import img5 from '../../assets/bird1.jpg';
import img6 from '../../assets/rabbit1.jpg';

import CardLoading from '../../components/Shimmer/CardLoading';

import Card from '../../components/Card'

import { 
  Container,
} from './styles';


const Home: React.FC = () => {
  const [isloading, setIsoading] = useState(true);
  
  const posts = [
    {
      image:img1,
      name:"user1",
      title:"teste1"
    },
    {
      image:img2,
      name:"user2",
      title:"teste2"
    },
    {
      image:img3,
      name:"user3",
      title:"teste3"
    },
    {
      image:img4,
      name:"user4",
      title:"teste4"
    },
    {
      image:img5,
      name:"user5",
      title:"teste5"
    },
    {
      image:img6,
      name:"user6",
      title:"teste6"
    },
  ]
  
  useEffect(()=>{
    setTimeout(() => {
      setIsoading(false);
    }, 1000);
  },[isloading, setIsoading]);

  return (
    <Container>
      {
        isloading ? 
          (
            posts.map((post, index) =>( 
              <CardLoading  key={index} cardPosition={posts.length - index}/>
            ))
          ) 
        :
          (
            posts.map((post, index) =>( 
              <Card 
                key={index}
                index={index}
                cardPosition={posts.length - index}
                image={post.image}
              />
            ))
          )
      }
     
    </Container>
  );
}

export default Home;