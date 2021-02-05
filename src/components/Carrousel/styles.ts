import styled from 'styled-components';

interface Ibottom{
    slider: number
  }

export const Container = styled.div`
   grid-area: MH;
    background: ${props => props.theme.colors.gray};
    overflow: hidden;


    position: relative;

    img{
        height: 100%;
    }
`;

export const ButtonNavegation = styled.div<Ibottom>`
    position: absolute;
    top: 5%;
    
    display: flex;

    div{
        z-index: 999;
        margin: 0 5px; 
        background: none;
        
        display: flex;
        
        width: calc(20px * 5);
        height: 20px;
        
        label{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: ${props => props.theme.colors.secundary};
        
            & + label{
                margin-left: 5px;
            }
        }
        

        input:checked ~ ${props => '#slide'+props.slider} {
            background: ${props => props.theme.colors.primary};
            border: 3.5px solid ${props => props.theme.colors.secundary};
        }
        
        input{
           display: none;
        }
    }
    /* scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; */
`;

