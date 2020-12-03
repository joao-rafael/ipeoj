import React from "react";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Question from './pages/Question';
import Question2 from './pages/Question-2';
import Question3 from './pages/Question-3';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/index.scss';


export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/question" component={Question} />
                <Route path="/question2" component={Question2} />
                <Route path="/question3" component={Question3} />
            </Switch>
        </ BrowserRouter>  
    );
};

export default App;