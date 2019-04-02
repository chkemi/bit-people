import React, { Component } from "react";
import ListItem from './ListItem';
import { UserCard } from "./UserCard";
import './loading.css'
import Search from "./buttons/Search";
import LoadingAnimation from "./LoadingAnimation";
import FailedSearch from "./FailedSearch";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            male: [],
            female: []
        }
    }

    render() {

        if (!this.props.users.length) {
            return <LoadingAnimation />
        }

        if (this.props.layout === 'list') {

            const ListItems = this.props.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.props.inputValue)
            })
                .map((user, index) => {
                    return (
                        <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.props.search} maleUsers={this.props.maleUsers} />
                    {ListItems.length > 0 ? ListItems : <FailedSearch />}
                </>
            )
        }

        if (this.props.layout === 'grid') {

            const GridItems = this.props.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.props.inputValue)
            })
                .map((user, index) => {
                    return (
                        <UserCard key={index} src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.props.search} maleUsers={this.props.maleUsers} />
                    {GridItems.length > 0 ? GridItems : <FailedSearch />}
                </>
            )
        }
    }
}

export default HomePage;