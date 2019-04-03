import React, { Component } from 'react';

class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li onClick={this.props.onLayoutSwitch}><a href='#'><i className={this.props.isToggleOn ? "fas fa-list" : "fas fa-grip-horizontal"}></i></a></li>
            // <button onClick={this.props.onLayoutSwitch}><i className={this.props.isToggleOn ? "fas fa-grip-horizontal" : "fas fa-list"}></i></button>
        );
    }
}

export default SwitchLayout;