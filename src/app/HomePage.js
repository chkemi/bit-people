import React, { Component } from "react";
import { fetchUsers } from "../services/usersService";
import ListItem from './ListItem';
import { UserCard } from "./UserCard";
import './loading.css'
import Search from "./buttons/Search";
import LoadingAnimation from "./LoadingAnimation";

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

        const ListItems = this.state.users.filter((user) => {
            return user.getFullName().toLowerCase().includes(this.props.inputValue)
        }).map((user, index) => {
            return (
                <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
            )
        })

        const GridItems = this.state.users.filter((user) => {
            return user.getFullName().toLowerCase().includes(this.props.inputValue)
        }).map((user, index) => {
            return (
                <UserCard key={index} src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
            )
        })

        if (!this.state.users.length) {
            return <LoadingAnimation />
        }

        if (this.props.layout === 'list') {
            return (
                <>
                    <Search search={this.props.search} />
                    {ListItems}
                </>
            )
        }

        if (this.props.layout === 'grid') {
            return (
                <>
                    <Search search={this.props.search} />
                    {GridItems}
                </>
            )
        }
    }
}

export default HomePage;