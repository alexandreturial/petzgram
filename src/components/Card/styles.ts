import styled from 'styled-components';

interface ICardeProps{
      CardPosition: number,
      image: string
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
      
      header{
            position: absolute;
            top: 2%;
            left: 5%;
      }

      & + div > header{
            left: 3%;
            top: 27%;
      }

      @media(min-width:600px){
            border-radius: 50px;
            
            header{
                  position: absolute;
                  top: 5%;
            }

            & + div > header{
                  top: 20%;
            }


            & + div > footer{   
                  top: 97%;
            }
      }
    
`;

export const Image= styled.div`
      width: auto;
      height: 100%;

      max-width: 100%;
      overflow: hidden;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      border-radius: 14%;

      img{
            height: 100%;
      }

      @media(min-width:600px){
            border-radius: 50px;
            img{
                  height: auto;
                  max-height: 100%;
            }
            
      }
`;

export const FooterCard = styled.footer`
      width: 80%;
      height: 50px;

      position: absolute;
      top: 95%;

      padding: 0 30px;
      border-radius: 40px;
      
      box-shadow: 0px 3px 4px 0px #424242ad;
      background: ${props => props.theme.colors.primary};

      display: flex;
      justify-content: space-between;
      align-items:center;
      
      @media(min-width:600px){
            top: 95%;  
      }

`;


