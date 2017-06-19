// @flow
import React, { Component } from 'react';
import '../scss/w_table.css';

class TablesWidget extends Component {
    render() {
        let test = true;
        if (test) {
            return ( 
                <div className = "app" >
                  True~ {JSON.stringify(test)}! {this.props.name} <br/>
                  {new Date().toLocaleTimeString()}
                </div>
            );
        } else {
            return ( 
                <div className = "app" >
                  False~ {JSON.stringify(test)}!
                </div>
            );
        }
    }
}

export default TablesWidget;