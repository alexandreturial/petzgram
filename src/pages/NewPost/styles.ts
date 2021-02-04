import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 50px);
    min-width: 315px;

    grid-area: CT;
    
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 15px 30px;

        input[type='file'] {
            display: none
        }
    }

    img{
        width: 300px;
        height: auto;

        max-height: 300px;
        overflow: hidden;
    }

     
`;

export const Button = styled.button`
    width:100%;
    height: 35px;

    background: ${props => props.theme.colors.gray};

    font: 400 15px Poppins;
    color: ${props => props.theme.colors.balck};

    margin-top:15px;
    padding: 5px 10px;

    border-radius: 15px;
`;

export const ImgSpan = styled.span`
    width:100%;
    height: 35px;

    background: ${props => props.theme.colors.secundary};

    font: 400 15px Poppins;
    color: ${props => props.theme.colors.balck};

    margin-top:15px;
    padding: 5px 10px;

    border-radius: 15px;
`;
