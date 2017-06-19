import React from 'react';
import ReactDOM from 'react-dom';
import TablesWidget from './components/w_table';
import registerServiceWorker from './registerServiceWorker';
import './scss/b_body.css';

ReactDOM.render(<TablesWidget />, document.getElementById('root'));
registerServiceWorker();
