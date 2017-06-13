import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
              name: "MENAKHOM",
              count: 0
        };
    }

    render() {

        return (
            <div>
                <h1>React Tutorial</h1>
                
            </div>
        );
        
    }
}

export default Header