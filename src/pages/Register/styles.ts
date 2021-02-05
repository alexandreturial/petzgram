import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 1fr 1fr;  
    grid-template-areas:
    'MH MH'
    'CT CT';


    @media(min-width: 700px){
    grid-template-columns: 2fr 1fr; 
    grid-template-areas:
        'MH CT'
        'MH CT';
    }
   
`;

export const Content = styled.div`
    grid-area: CT;
    background: ${props => props.theme.colors.primary};
    
    z-index: 4;
    margin-top: -15%;
    border-radius: 50px 50px 0 0;

    padding: 20px 30px;
    form{
        display: flex;
        flex-direction: column;
    }

    p{
        width: 100%;
      
        margin-top: 15px;

        text-align: center;
        font-size: 15px;
    }

    @media(min-width: 700px){
        margin-top: 0%;
        margin-left: -25%;
        
        border-radius: 50px 0  0 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Button = styled.button`
    width:100%;
    height: 35px;

    background: ${props => props.theme.colors.gray};

    font: 400 15px Poppins;
    color: ${props => props.theme.colors.balck};

    padding: 5px 0;

    border-radius: 15px;
`;
