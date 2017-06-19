// @flow
import React, { Component } from 'react';
import '../scss/w_table.css';

class TablesWidget extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
        if (this.props.test === "visible") {
            return ( 
                <div className = "app" >
                  True! {this.state.date.toLocaleTimeString()}
                </div>
            );
        } else {
            return ( 
                <div className = "app" >
                  False!
                </div>
            );
        }
    }
}

export default TablesWidget;