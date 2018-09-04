import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Nutshell from './Components/Nutshell';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <Nutshell />
    </Router>
    , document.getElementById('root'));

    registerServiceWorker();


