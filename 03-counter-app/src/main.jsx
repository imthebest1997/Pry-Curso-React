import "./styles.css"

import { CounterApp } from "./CounterApp";
import React from 'react';
import ReactDOM from "react-dom/client";

// import { FirstApp } from './FirstApp';



// import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={20} />
    </React.StrictMode>
);

