import styled from 'styled-components';

interface IColort{
    cor: boolean
}

export const Container = styled.div<IColort>`

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
        color: ${props => props.cor ? props.theme.colors.white : props.theme.colors.balck};

        

        h3{
            
            font: 300 15px Poppins;
        }
        h4{
           
            font: 300 12px Poppins;
        }     
        
   }
`;
