import React, { Component } from "react";
import ListItem from './ListItem';
import { UserCard } from "./UserCard";
import '../loading.css'
import Search from "../buttons/Search";
import LoadingAnimation from "../LoadingAnimation";
import FailedSearch from "../FailedSearch";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    display() {
        let maleUsers = 0;
        let femaleUsers = 0;

        if (!this.props.users.length) {
            return <LoadingAnimation />
        }

        if (!this.props.layout) {

            const ListItems = this.props.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.props.inputValue)
            })
                .map((user, index) => {
                    if (user.gender === 'male') {
                        maleUsers++;
                    }

                    if (user.gender === 'female') {
                        femaleUsers++;
                    }

                    return (
                        <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.props.search} users={this.props.users} maleUsers={maleUsers} femaleUsers={femaleUsers} />
                    {ListItems.length > 0 ? ListItems : <FailedSearch />}
                </>
            )
        }

        if (this.props.layout) {

            const GridItems = this.props.users.filter((user) => {
                return user.fullName.toLowerCase().includes(this.props.inputValue)
            })
                .map((user, index) => {

                    if (user.gender === 'male') {
                        maleUsers++;
                    }

                    if (user.gender === 'female') {
                        femaleUsers++;
                    }

                    return (
                        <UserCard key={index} src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} gender={user.gender} />
                    )
                })

            return (
                <>
                    <Search search={this.props.search} users={this.props.users} maleUsers={maleUsers} femaleUsers={femaleUsers} />
                    {GridItems.length > 0 ?
                        <div className='row'>
                            {GridItems}
                        </div> :
                        <FailedSearch />}
                </>
            )
        }
    }

    render() {
        return this.display()
    }
}

export default HomePage;