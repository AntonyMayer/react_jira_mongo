// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import TablesWidget from './components/w_table';
import registerServiceWorker from './registerServiceWorker';
import './scss/b_body.css';


ReactDOM.render(<TablesWidget test="visible"/>, document.getElementById('root'));

registerServiceWorker();


document.getElementById('test').addEventListener('click', function() {
    console.log('this');
    let data = 'lorem';

        fetch(`/update`, {
            method: 'post',
            body: data,
            headers: new Headers({
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
            })
        }).then(response => {
            console.log('got answer');
            // return response.json();
        }).then(data => {
            console.log('proceeded');
            // this.determineResults(data);
        });
});