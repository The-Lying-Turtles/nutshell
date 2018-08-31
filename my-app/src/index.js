import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nutshell from './Components/Nutshell';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nutshell />, document.getElementById('root'));
registerServiceWorker();
