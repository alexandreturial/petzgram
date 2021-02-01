import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }
    body, #root{
        font-family: 'Poppins', sans-serif;
        -webkit-font-smooth: antialiased !important;
    }
    *, button, input{
        border: 0;
        outline: 0;
       
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

`; 