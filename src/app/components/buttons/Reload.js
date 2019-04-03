import React, { Component } from 'react';

class Reload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button onClick={this.props.reload}>
                <i className="fas fa-redo"></i>
            </button >
        );
    }
}

export default Reload;