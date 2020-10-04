import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const greet = () => {
  // eslint-disable-next-line no-console
  console.log('%cHello there!\nI like to inspect code too!', 'background: #222; color: #2b9fed');
  // eslint-disable-next-line no-console
  console.log('%cMadeByRafel\njoao-rafael.github.io', 'background: #222; color: #F68181;');
}

greet();
ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
);