import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const AppRoutes: React.FC = ()=>(
    <BrowserRouter>
        <Layout>
            <Route path="/" exact component={Home}/>
            <Route path="/Profile" exact component={Profile}/>
        </Layout>
    </BrowserRouter>
   

);

export default AppRoutes;