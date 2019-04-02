import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

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

        return (
            <footer className='center-align'>
                <p>{new Date().getFullYear()} Copyright BIT <span>Last update: {formattedTime}</span></p>
            </footer>
        );
    }
}

export default Footer;