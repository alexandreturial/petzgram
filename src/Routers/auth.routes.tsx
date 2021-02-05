import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import Register from '../pages/Register';


const AuthRoutes: React.FC = () =>(
    <Switch>
        <Route exact path="/" component={SingIn}/>
        <Route exact path="/register" component={Register}/>
    </Switch>
    
);

export default AuthRoutes;