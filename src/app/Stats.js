import React, { Component } from 'react';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <p>Male: {this.props.maleUsers} Female: {this.props.femaleUsers}</p>
        );
    }
}

export default Stats;