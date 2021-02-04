import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 50px);
    min-width: 315px;

    grid-area: CT;
    
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 15px 30px;
    }

    img{
        width: 300px;
        height: auto;

        max-height: 300px;
        overflow: hidden;
    }
`;
