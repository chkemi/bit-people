import React, { Component } from "react";
import SwitchLayout from "./buttons/SwitchLayout";
import Reload from "./buttons/Reload";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className='center'>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Bit Persons</a>
                    <ul className="right">
                        <SwitchLayout onLayoutSwitch={this.props.onLayoutSwitch} isToggleOn={this.props.isToggleOn} />
                        <Reload reload={this.props.reload} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;