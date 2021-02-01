import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  display: none;
  
   @media(min-width:600px){
      display: flex;
      flex-direction: column;

      padding: 10px;

      div{
         margin-bottom: 15px;
      }
   }
  
`;
