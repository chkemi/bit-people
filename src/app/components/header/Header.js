import React, { Component } from "react";
import SwitchLayout from "../buttons/SwitchLayout";
import Reload from "../buttons/Reload";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (this.props.location.pathname === '/about') {
            return (
                <nav className='center'>
                    <div className="nav-wrapper">
                        <h5 href="#!" className="brand-logo"><Link to='/'>Bit Persons</Link></h5>
                    </div>
                </nav>
            )
        }

        return (
            <nav className='center'>
                <div className="nav-wrapper">
                    <h5 href="#!" className="brand-logo">Bit Persons</h5>
                    <ul className="right">
                        <li><Link to='/about'>About</Link></li>
                        <SwitchLayout onLayoutSwitch={this.props.onLayoutSwitch} isToggleOn={this.props.isToggleOn} />
                        <Reload reload={this.props.reload} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);