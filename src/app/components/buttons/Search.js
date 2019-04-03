import React, { Component } from 'react';
import Stats from './Stats';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search users" onChange={this.props.search} />
                        <label className="label-icon" htmlFor="search"><i className="fas fa-search"></i></label>
                    </div>
                </form>
                <Stats maleUsers={this.props.maleUsers} femaleUsers={this.props.femaleUsers} />
            </div>
        );
    }
}

export default Search;