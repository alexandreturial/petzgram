import styled from 'styled-components';

export const Container = styled.header`
    grid-area: MH;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 10px;
    background: ${props => props.theme.colors.primary};

    @media(min-width: 600px){
        padding: 0 30px;
    }
    
`;
export const Logo  = styled.div`
    font-size: 30px;
    font-family: 'Grand Hotel', cursive;

   a{
    color: ${props => props.theme.colors.white};
   }
   
   
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        
        font: 300 15px Poppins;

        color: ${props => props.theme.colors.white};

        :first-child{
            margin-right: 15px;
        }
    }
    
`;

