import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// import { useAuth } from '../hooks/Auth';

import App from './app.routes';
import Auth from './auth.routes';


const Routes: React.FC = () =>{
    // const { logged } = useAuth();
    return(
        <BrowserRouter>
            <App/>
            {/* {logged ? <App/> : <Auth />} */}
        </BrowserRouter>
       
    );
}

export default Routes;