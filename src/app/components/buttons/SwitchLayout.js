import React, { Component } from 'react';

class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button onClick={this.props.onLayoutSwitch}>
                <i className={this.props.isToggleOn ? "fas fa-list" : "fas fa-grip-horizontal"}></i>
            </button>
        );
    }
}

export default SwitchLayout;