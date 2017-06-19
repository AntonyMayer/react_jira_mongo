// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TablesWidget from './components/w_table';
import registerServiceWorker from './registerServiceWorker';
import './scss/b_body.css';

function lorem() {
    ReactDOM.render(<TablesWidget name='test'/>, document.getElementById('root'));
}

setInterval(lorem, 1000);

registerServiceWorker();
