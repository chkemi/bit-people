import React, { Component } from 'react';
import './FailedSearch.css';

class FailedSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='failed'>
                <i className="far fa-meh"></i>
                <h1>We couldn't find any<br /> people matching your<br /> search</h1>
            </div>
        );
    }
}

export default FailedSearch;