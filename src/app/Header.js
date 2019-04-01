import React, { Component } from "react";
import SwitchLayout from "./buttons/SwitchLayout";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">Bit Persons</a>
                    <ul class="right">
                        <SwitchLayout onLayoutSwitch={this.props.onLayoutSwitch} isToggleOn={this.props.isToggleOn} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;