import React from "react";
import Home from './pages/Home';

import './style/index.scss';


export const App = () => {
    return (
        <div>
            <div className="container">
                <Home>
                </Home>
            </div>
        </div>
    );
};

export default App;