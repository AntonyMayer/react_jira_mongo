// @flow
import React, { Component } from 'react';
import '../scss/w_table.css';

class TablesWidget extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
        return ( 
            <div>
              <div className = "lorem" >
                True! {this.state.date.toLocaleTimeString()}
              </div>
              {/*<ButtonTables />*/}
            </div>
        );
    }
}

export default TablesWidget;