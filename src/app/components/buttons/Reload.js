import React, { Component } from 'react';

class Reload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <li onClick={this.props.reload}>
                <a href=''>
                    <i className="fas fa-redo"></i>
                </a>
            </li >
        );
    }
}

export default Reload;