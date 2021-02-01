import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    min-width: 315px;

    background: ${props => props.theme.colors.primary};

    display: grid;
    grid-template-rows: 50px 6fr;  
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
