import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <li className='row'>
                <div className='col s2'>
                    <img src={this.props.src} alt='User'></img>
                </div>
                <div className='col s10'>
                    <p>{this.props.fullName}</p>
                    <p><i className="fas fa-envelope"></i>{this.props.email}</p>
                    <p><i className="fas fa-birthday-cake"></i>{this.props.birthday}</p>
                </div>
            </li>
        );
    }
}

export default ListItem;