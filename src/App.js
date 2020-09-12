import React from "react";

import './style/index.scss';

export const App = props => {
    return (
        <div>
            <div className="container">
                <h1>Hello Parcel, {props.name} </h1>
            </div>
        </div>
    );
};

export default App;