import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 50px);
    min-width: 315px;

    grid-area: CT;
    
    div{
        border-radius: 8% 8% 14% 14%;
        & + div{
            border-radius: 8% 8% 14% 14%;
            margin-top: -35%;
            
            height: calc(100vh - 50px);
        }
    }

   @media(min-width:600px){
      padding: 0 10%;

      overflow-y: scroll;
    
     ::-webkit-scrollbar{
        visibility: hidden;
     }

      div{
        & + div{
            border-radius: 8% 8% 14% 14%;
            margin-top: -10%;
            
            height: calc(110% - 50px);
        }
      }

   }

`;
