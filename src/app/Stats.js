import React, { Component } from 'react';
import './Stats.css';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <p className='stats'>Male: {this.props.maleUsers} Female: {this.props.femaleUsers}</p>
        );
    }
}

export default Stats;