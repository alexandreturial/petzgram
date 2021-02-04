import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    min-width: 315px;

    background: ${props => props.theme.colors.primary};

    display: grid;
    grid-template-rows: 50px auto;  
    grid-template-areas:
    'MH'
    'CT';


    @media(min-width: 600px){
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 50px auto;  

    grid-template-areas:
    'MH MH'
    'CT AS';
    }

`;

export const Footer = styled.footer`
     
      
      width: 100%;
     
     
      position: fixed;
      bottom: 0%;
      z-index: 1000;

      background: ${props => props.theme.colors.secundary};
      border-radius: 30px 30px 0 0;
      
      padding: 5px 30px;     
      
      @media(min-width:600px){
            display: none;
      }
`;

