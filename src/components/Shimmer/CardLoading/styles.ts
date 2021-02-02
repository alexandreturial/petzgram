import styled from 'styled-components';

interface ICardeProps{
    CardPosition: number,
   
}

export const Container = styled.div<ICardeProps>`
    width: 100%;
    height: calc(100vh - 50px);
     
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
      
    border-radius: 14%;
    background: ${props => props.theme.colors.tertiary};
    
    z-index: ${props => props.CardPosition};

    .img-skeleton{
        width: 100%;
        height: 100%;

        border-radius: 8% 8% 14% 14%;
       
        filter: brightness(90%);
    }
    
    footer{
        width: 80%;
        height: 50px;

        position: absolute;
        top: 95%;

        .footer-skeleton{
            width: 100%;
            height: 100%;
        
            border-radius: 40px;
        }
        
        @media(min-width:600px){
            top: 95%;  
        }
    }
`;

