import React from "react";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/index.scss';


export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </ BrowserRouter>  
    );
};

export default App;