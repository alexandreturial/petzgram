import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

   img{
       width: 50px;
       height: 50px;

       overflow: hidden;
      
       border-radius: 50%;
   }

   div{
        padding: 0 5px;
        color: white;
        
        h3{
            
            font: 300 15px Poppins;
        }
        h4{
           
            font: 300 12px Poppins;
        }     
   }
`;
