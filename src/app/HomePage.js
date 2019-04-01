import React, { Component } from "react";
import { fetchUsers } from "../services/usersService";
import ListItem from './ListItem';
import { UserCard } from "./UserCard";


class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetchUsers().then((users) => this.setState({
            users
        }))
    }

    render() {

        if (!this.state.users.length) {
            return <h3>Loading...</h3>
        }

        if (this.props.layout === 'list') {
            return this.state.users.map((user, index) => {
                return (
                    <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                )
            })
        }

        if (this.props.layout === 'grid') {
            return this.state.users.map((user, index) => {
                return (
                    <UserCard key={index} src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                )
            })
        }
    }
}

export default HomePage;