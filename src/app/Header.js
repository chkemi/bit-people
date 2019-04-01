import React, { Component } from "react";
import SwitchLayout from "./buttons/SwitchLayout";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // return (
        //     <header className='center-align'>
        //         <h4>Bit Persons</h4>
        //         <SwitchLayout onLayoutSwitch={this.props.onLayoutSwitch} isToggleOn={this.props.isToggleOn} />
        //     </header>
        // );

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