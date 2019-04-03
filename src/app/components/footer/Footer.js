import React, { Component } from 'react';
import { withRouter } from "react-router";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getPassedTime() {
        const time = localStorage.getItem('time')
        let formattedTime = (Date.now() - time) / 1000 / 60;

        if ((Date.now() - time) / 1000 / 60 < 60) {
            let bla = Math.floor((Date.now() - time) / 1000 / 60)
            formattedTime = `${bla} minutes ago`
        } else if ((Date.now() - time) / 1000 / 60 / 60 < 24) {
            let bla = Math.floor((Date.now() - time) / 1000 / 60 / 60)
            formattedTime = `${bla} hours ago`
        } else if ((Date.now() - time) / 1000 / 60 / 60 / 24 < 30) {
            let bla = Math.floor((Date.now() - time) / 1000 / 60 / 60 / 24)
            formattedTime = `${bla} days ago`
        }
        return formattedTime
    }

    render() {
        if (this.props.location.pathname === '/about') {
            return (
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className="container">
                            {new Date().getFullYear()} Copyright BIT
                    </div>
                    </div>
                </footer>
            )
        }

        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        {new Date().getFullYear()} Copyright BIT
                        <span className='right'>Last update: {this.getPassedTime()}</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);